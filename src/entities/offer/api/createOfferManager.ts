import { OfferManagerFactory } from "@/src/entities/offer/api/OfferManagerFactory";
import { appConfig } from "@/src/shared/configs";
import { getBaseHeaders } from "@/src/shared/api-client/di";
import { getAuthToken } from "@/src/entities/auth/utils";

export const createOfferManager = async () => {
    const factory = new OfferManagerFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createOfferManager(await getAuthToken());
};
