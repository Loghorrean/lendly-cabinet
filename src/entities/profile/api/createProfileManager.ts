import { ProfileManagerFactory } from "@/src/entities/profile/api/ProfileManagerFactory";
import { appConfig } from "@/src/shared/configs";
import { getBaseHeaders } from "@/src/shared/api-client/di";
import { getAuthToken } from "@/src/entities/auth/utils";

export const createProfileManager = async () => {
    const factory = new ProfileManagerFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createProfileManager(await getAuthToken());
};
