import { PrimaryMarketProjectProviderFactory } from "@/src/entities/primary-market/api/PrimaryMarketProjectProviderFactory";
import { appConfig } from "@/src/shared/configs";
import { getBaseHeaders } from "@/src/shared/api-client/di";
import { getAuthToken } from "@/src/entities/auth/utils";

export const createPrimaryProjectProvider = async () => {
    const factory = new PrimaryMarketProjectProviderFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createPrimaryMarketProjectProvider(await getAuthToken());
};
