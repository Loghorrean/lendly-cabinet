import { NotificationManagerFactory } from "@/src/entities/notification/api/NotificationManagerFactory";
import { appConfig } from "@/src/shared/configs";
import { getBaseHeaders } from "@/src/shared/api-client/di";
import { getAuthToken } from "@/src/entities/auth/utils";

export const createNotificationManager = async () => {
    const factory = new NotificationManagerFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createNotificationManager(await getAuthToken());
};
