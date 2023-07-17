import { UploadManagerFactory } from "@/src/entities/file/api/UploadManagerFactory";
import { appConfig } from "@/src/shared/configs";
import { getAuthToken } from "@/src/entities/auth/utils";

export const createUploadManager = async () => {
    const factory = new UploadManagerFactory(appConfig.apiBaseUrl);
    return factory.createUploadManager(await getAuthToken());
};
