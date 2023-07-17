import { ApiClientFactory, ApiClientFactoryInterface } from "@/src/shared/api-client";
import { UploadManager } from "@/src/entities/file/api/UploadManager";

export class UploadManagerFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/upload`);
    }

    createUploadManager(authToken: string): UploadManager {
        return new UploadManager(this.apiClientFactory.createAuthorizedClient(authToken));
    }
}
