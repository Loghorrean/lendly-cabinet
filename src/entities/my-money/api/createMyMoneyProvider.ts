import { MyMoneyProviderFactory } from "@/src/entities/my-money/api/MyMoneyProviderFactory";
import { appConfig } from "@/src/shared/configs";
import { getBaseHeaders } from "@/src/shared/api-client/di";
import { getAuthToken } from "@/src/entities/auth/utils";

export const createMyMoneyProvider = async () => {
    const factory = new MyMoneyProviderFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createMyMoneyProvider(await getAuthToken());
};
