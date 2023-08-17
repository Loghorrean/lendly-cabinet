import { TransactionProviderFactory } from "@/src/entities/transaction/api/TransactionProviderFactory";
import { appConfig } from "@/src/shared/configs";
import { getBaseHeaders } from "@/src/shared/api-client/di";
import { getAuthToken } from "@/src/entities/auth/utils";

export const createTransactionProvider = async () => {
    const factory = new TransactionProviderFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createTransactionProvider(await getAuthToken());
};
