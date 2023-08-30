import { MyInvestmentsProviderFactory } from "@/src/entities/my-investments/api/MyInvestmentsProviderFactory";
import { appConfig } from "@/src/shared/configs";
import { getBaseHeaders } from "@/src/shared/api-client/di";
import { getAuthToken } from "@/src/entities/auth/utils";

export const createMyInvestmentsProvider = async () => {
    const factory = new MyInvestmentsProviderFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createInvestmentsProvider(await getAuthToken());
};
