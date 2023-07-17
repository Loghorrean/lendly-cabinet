import { ApiClientInterface } from "@/src/shared/api-client";
import { UploadedFile } from "@/src/entities/file/model";

export class UploadManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    uploadFile(file: File): Promise<UploadedFile> {
        const formData = new FormData();
        formData.append("file", file);
        return this.apiClient.uploadFile("/file", formData);
    }
}
