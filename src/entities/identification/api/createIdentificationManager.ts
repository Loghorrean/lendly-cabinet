import { IdentificationManagerFactory } from "@/src/entities/identification/api/IdentificationManagerFactory";
import { appConfig } from "@/src/shared/configs";
import { getBaseHeaders } from "@/src/shared/api-client/di";
import { getAuthToken } from "@/src/entities/auth/utils";

export const createIdentificationManager = async () => {
    const factory = new IdentificationManagerFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createIdentificationManager(await getAuthToken());
};
