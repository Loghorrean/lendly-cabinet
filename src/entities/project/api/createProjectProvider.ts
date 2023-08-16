import { appConfig } from "@/src/shared/configs";
import { getBaseHeaders } from "@/src/shared/api-client/di";
import { getAuthToken } from "@/src/entities/auth/utils";
import { ProjectProviderFactory } from "@/src/entities/project/api/ProjectProviderFactory";

export const createProjectProvider = async () => {
    const factory = new ProjectProviderFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createProjectProvider(await getAuthToken());
};
