import * as multipart from 'parse-multipart';
import {
    Aborter,
    BlobURL,
    BlockBlobURL,
    ContainerURL,
    ServiceURL,
    StorageURL,
    SharedKeyCredential,
    TokenCredential,
} from "@azure/storage-blob";
import { ApplicationContext, SystemContentType } from './common';

//todo - pull from app settings
const account = process.env.BLOB_ACCOUNT;
const accountKey = process.env.BLOB_ACCOUNT_KEY;

// Use SharedKeyCredential with storage account and account key
const sharedKeyCredential = new SharedKeyCredential(account, accountKey);

// Use TokenCredential with OAuth token
const tokenCredential = new TokenCredential("token");
tokenCredential.token = "renewedToken";

// Use sharedKeyCredential, tokenCredential or tokenCredential to create a pipeline
const pipeline = StorageURL.newPipeline(sharedKeyCredential);
const serviceURL = new ServiceURL(`${process.env.BLOB_SERVICE_URL_BASE}/${account}`, pipeline);

export class ContentService {

    private getContainerName(context: ApplicationContext, contentType:SystemContentType = SystemContentType.Asset, key?:string) {
        if(key) {
            return `${context}-${key}-${contentType}`;
        } else {
            return `${context}-${contentType}`;
        }
    }

    private async getBlobInternal(containerName:string, contentName:string) {
        const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
        const blobURL = BlobURL.fromContainerURL(containerURL, contentName);
        return await blobURL.download(Aborter.none, 0);
    }

    private async saveBlob(containerName:string, contentName:string, content:any, headers:object) {

        const contentBuffer = Buffer.from(content)
        const boundary = multipart.getBoundary(headers['content-type']);
        const contentParsed = multipart.Parse(contentBuffer, boundary);


        const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
        const blobURL = BlobURL.fromContainerURL(containerURL, contentName);
        const blockBlobURL = BlockBlobURL.fromBlobURL(blobURL);
        const options = {
            blobHTTPHeaders: {
                blobContentType:  contentParsed[0].type,
            }
        };

        try {
            //Attempt saving the blob, if container exists then return blob meta
            //Force to catch to create a new container first then save blob.
            return await blockBlobURL.upload(Aborter.none, contentParsed[0].data, content.length, options);
        } catch(error) {
            await containerURL.create(Aborter.none);
            return await blockBlobURL.upload(Aborter.none, contentParsed[0].data, content.length, options);
        }

    }

    private async deleteBlob(containerName:string, contentName:string) {
        const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
        const blobURL = BlobURL.fromContainerURL(containerURL, contentName);
        return blobURL.delete(Aborter.none);
    }

    
    private async listBlobs(containerName) {
        const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
        let marker;
        let result = [];

        do {
            const listBlobsResponse = await containerURL.listBlobFlatSegment(Aborter.none, marker);
            marker = listBlobsResponse.marker;
            for (const blob of listBlobsResponse.segment.blobItems) {
                console.log(`Blob: ${blob.name}`);
                result.push(blob);
            }
        } while (marker);

        return result;
    }

    /**
     * This parses the incoming request from the API route.
     * The context parameter is made of two parts ApplicationContext and SystemContentType separated by a $ delimeter.
     * ApplicationContext is required and the SystemContentType is optional
     * 
     * @param context `{ApplicationContext:required}${SystemContentType}`
     */
    parseApiContext(context:string) {
        return context.split('$');
    }

    async getGlobalAsset(containerName:string, contentName:string) {
        return await this.getBlobInternal(containerName, contentName);
    }

    /**
     * 
     * @param context Required: One of the available ApplicationContexts
     * @param contentName Required: The virtual path to the blob 
     * @param contentType Required: One of the available ContentTypes
     * @param entityGuid Optional: guid of the entity leave blank for context of system blobs
     */
    async getContent(context:ApplicationContext, contentName:string, systemContentType:SystemContentType, entityGuid?:string) {
        const containerName = this.getContainerName(context, systemContentType, entityGuid);
        return this.getBlobInternal(containerName, contentName);
    }

    async saveContent(
            context:ApplicationContext,
            contentName:string,
            systemContentType:SystemContentType,
            content:any,
            headers:object,
            entityGuid?:string
    ) {
        const containerName = this.getContainerName(context, systemContentType, entityGuid);

        return this.saveBlob(containerName, contentName, content, headers);
    }

    async deleteContent(
        context:ApplicationContext,
        contentName:string,
        systemContentType:SystemContentType,
        entityGuid?:string
    ) {
        const containerName = this.getContainerName(context, systemContentType, entityGuid);
        return this.deleteBlob(containerName, contentName);
    }

    async listContent(
        context:ApplicationContext,
        systemContentType:SystemContentType,
        entityGuid?:string
    ) {
        const containerName = this.getContainerName(context, systemContentType, entityGuid);
        return this.listBlobs(containerName);
    }
    
}
