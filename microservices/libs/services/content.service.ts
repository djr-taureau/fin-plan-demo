import { extname } from 'path';
import { getType } from 'mime';
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

const account = process.env.BLOB_ACCOUNT;
const accountKey = process.env.BLOB_ACCOUNT_KEY;
const serviceUrlBase = process.env.BLOB_SERVICE_URL_BASE;

// Use SharedKeyCredential with storage account and account key
const sharedKeyCredential = new SharedKeyCredential(account, accountKey);


// Use sharedKeyCredential, tokenCredential or tokenCredential to create a pipeline
const pipeline = StorageURL.newPipeline(sharedKeyCredential);
const serviceURL = new ServiceURL(`${serviceUrlBase}`, pipeline);

export class ContentService {

    /**
     * 
     * @param content blobUrl.download() : ReadableStream
     * @param contentMimeType mimeType
     * @param metadata object with properties defaults to empty
     */
    private processReadableStream(content, contentMimeType:string, metadata = {}) {
        if(content && content.readableStreamBody) {
            switch(contentMimeType) {
                case 'text/html':
                case 'text/plain':
                    return {
                        metadata: Object.assign({
                            ...metadata,
                            contentType: content.contentType,
                            contentLength: content.contentLength
                        }, content.metadata),
                        content: content.readableStreamBody.read(content.contentLength).toString()
                    };
                case 'application/json':
                    return {
                        metadata: Object.assign({
                            ...metadata,
                            contentType: content.contentType,
                            contentLength: content.contentLength
                        }, content.metadata),
                        content: JSON.parse(content.readableStreamBody.read(content.contentLength).toString())
                    };
                default:
                    return {
                        metadata: Object.assign({
                            ...metadata,
                            contentType: content.contentType,
                            contentLength: content.contentLength
                        }, content.metadata),
                        content: content.readableStreamBody.read(content.contentLength)
                    }
            }            
        } else {
            throw new Error('content or content.readableStream does not exist');
        }
    }

    /**
     * Format container name for blob storage
     * 
     * @param context ApplicationContext
     * @param contentType SystemContentType
     * @param key an entityGuid for the storage container, leave blank for ApplicationContext.System
     */
    private getContainerName(context: ApplicationContext, contentType:SystemContentType = SystemContentType.Asset, key?:string) {
        if(key) {
            return `${context}-${key}-${contentType}`;
        } else {
            return `${context}-${contentType}`;
        }
    }

    /**
     * Processor for implementing buffer based on mime/type
     * 
     * @param contentName viurtual path and filename.ext of the blob
     * @param content raw or multipart data
     */
    createBuffer(contentName:string, content:any) {
        const contentMimeType = this.getContentMimeType(contentName);

        switch(contentMimeType) {
            case 'application/json':
                return Buffer.from(JSON.stringify(content));
            case 'text/html':
                return Buffer.from(content.toString());
            default:
                return Buffer.from(content);
        }
    }


    /**
     * Download blob data from container name
     * 
     * @param containerName the container name of
     * @param contentName the virtual path and filename.ext of the blob
     */
    private async getBlob(containerName:string, contentName:string) {
        const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
        const blobURL = BlobURL.fromContainerURL(containerURL, contentName);
        return await blobURL.download(Aborter.none, 0);
    }


    /**
     * save blob to storage
     * 
     * @param containerName the container name
     * @param contentName the virtual path and filename.ext of the blob
     * @param content raw or multipart data
     * @param headers request header to determine if multipart/form-data
     */
    private async saveBlob(containerName:string, contentName:string, content:any, headers:object) {
        let options;
        let processedContent;
        
        const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
        const blobURL = BlobURL.fromContainerURL(containerURL, contentName);
        const blockBlobURL = BlockBlobURL.fromBlobURL(blobURL);
        
        //Create a buffer for content
        const contentBuffer = this.createBuffer(contentName, content);

        //If supplied headers are multipart/form-data need to parse body content
        if(headers['content-type'].indexOf('multipart/form-data') >= 0) {
            const boundary = multipart.getBoundary(headers['content-type']);
            const contentParsed = multipart.Parse(contentBuffer, boundary);
            processedContent = contentParsed[0].data;
            options = {
                blobHTTPHeaders: {
                    blobContentType:  contentParsed[0].type,
                }
            };
        } else { //if not multipart then content was uploaded raw in req.body
            processedContent = contentBuffer;
            options = {
                blobHTTPHeaders: {
                    blobContentType:  this.getContentMimeType(contentName),
                }
            };
        }

        try {
            //If upload method fails then a container does not exist
            return await blockBlobURL.upload(Aborter.none, processedContent, processedContent.length, options);
        } catch(error) {
            //If inital save fails then create a container
            await containerURL.create(Aborter.none);
            //save blob
            return await blockBlobURL.upload(Aborter.none, processedContent, processedContent.length, options);
        }
        
    }

    /**
     * Permenantly Deletes blob
     * 
     * @param containerName 
     * @param contentName 
     */
    private async deleteBlob(containerName:string, contentName:string) {
        const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
        const blobURL = BlobURL.fromContainerURL(containerURL, contentName);
        return blobURL.delete(Aborter.none);
    }

    
    /**
     * List blobs in a container
     * 
     * @param containerName 
     */
    private async listBlobs(containerName) {
        const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
        let marker;
        const result = [];

        do {
            const listBlobsResponse = await containerURL.listBlobFlatSegment(Aborter.none, marker);
            marker = listBlobsResponse.marker;
            for (const blob of listBlobsResponse.segment.blobItems) {
                const blobURL = BlobURL.fromContainerURL(containerURL, blob.name);
                const blobStream = await blobURL.download(Aborter.none, 0);

                const content = this.processReadableStream(blobStream, blob.properties.contentType, {
                    containerName: containerName,
                    blobName: blob.name
                });
                result.push(content);
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

    /**
     * TODO: implemented in MailService need to pull out into a utility
     * Determine the mimType based on filename.ext.
     * @param filename 
     */
    getContentMimeType(filename: string) {
        return getType(extname(filename));
    }

    getBlobUrl(context:ApplicationContext, contentName:string, systemContentType:SystemContentType, entityGuid?:string) {
        const containerName = this.getContainerName(context, systemContentType, entityGuid);
        const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
        return BlobURL.fromContainerURL(containerURL, contentName).url;
    }
    

    /**
     * 
     * Public content method for prcessing content calls to blob storage
     * 
     * @param applicationContext Required: One of the available ApplicationContexts
     * @param contentName Required: The virtual path to the blob and filename.ext
     * @param contentType Required: One of the available SystemContentTypes
     * @param entityGuid Optional: guid of the entity leave blank for ApplicationContexts.System blobs
     */
    public async getContent(applicationContext:ApplicationContext, contentName:string, systemContentType:SystemContentType, entityGuid?:string) {
        const contentMimeType = this.getContentMimeType(contentName);
        const containerName = this.getContainerName(applicationContext, systemContentType, entityGuid);
        const content = await this.getBlob(containerName, contentName);
        
        return this.processReadableStream(content, contentMimeType);
    }

    /**
     * Public method for saving/updating content
     * 
     * @param applicationContext ApplicationContext
     * @param contentName virtual path and filename.ext of blobl
     * @param systemContentType SystemContentType
     * @param content the contents of request.body
     * @param headers the request headers
     * @param entityGuid the entityGuid leave blank for ApplicationContext.System
     */
    public async saveContent(
            applicationContext:ApplicationContext,
            contentName:string,
            systemContentType:SystemContentType,
            content:any,
            headers:object,
            entityGuid?:string
    ) {
        const containerName = this.getContainerName(applicationContext, systemContentType, entityGuid);

        return await this.saveBlob(containerName, contentName, content, headers);
    }

    /**
     * Public method Permenatly Delete a blob
     * 
     * @param applicationContext 
     * @param contentName 
     * @param systemContentType 
     * @param entityGuid Leave blank for ApplicationContext.System
     */
    public async deleteContent(
        applicationContext:ApplicationContext,
        contentName:string,
        systemContentType:SystemContentType,
        entityGuid?:string
    ) {
        const containerName = this.getContainerName(applicationContext, systemContentType, entityGuid);
        return await this.deleteBlob(containerName, contentName);
    }

    /**
     * Public method Return list of blobs in a container
     * 
     * @param applicationContext 
     * @param systemContentType 
     * @param entityGuid Leave blank for ApplicationContext.System
     */
    public async listContent(
        applicationContext:ApplicationContext,
        systemContentType:SystemContentType,
        entityGuid?:string
    ) {
        const containerName = this.getContainerName(applicationContext, systemContentType, entityGuid);
        return await this.listBlobs(containerName);
    }
    
}
