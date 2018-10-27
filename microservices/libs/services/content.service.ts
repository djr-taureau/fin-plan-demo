const {
    Aborter,
    BlobURL,
    BlockBlobURL,
    ContainerURL,
    ServiceURL,
    StorageURL,
    SharedKeyCredential,
    TokenCredential
  } = require("@azure/storage-blob");

  //todo - pull from app settings
  const account = "devstoreaccount1";
  const accountKey = "Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==";

  // Use SharedKeyCredential with storage account and account key
  const sharedKeyCredential = new SharedKeyCredential(account, accountKey);

  // Use TokenCredential with OAuth token
  const tokenCredential = new TokenCredential("token");
  tokenCredential.token = "renewedToken";

  // Use sharedKeyCredential, tokenCredential or tokenCredential to create a pipeline
  const pipeline = StorageURL.newPipeline(sharedKeyCredential);
  const serviceURL = new ServiceURL(`http://127.0.0.1:10000/${account}`, pipeline);
  
export class ContentService {
	async getAsset(containerName, assetName) {
        const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
        const blobURL = BlobURL.fromContainerURL(containerURL, assetName);
        return await blobURL.download(Aborter.none, 0);
    }

    async getUserAsset(userGuid, assetName) {
        var containerName = 'assets-' + userGuid;
        return await this.getAsset(containerName, assetName);
    }
    
}
