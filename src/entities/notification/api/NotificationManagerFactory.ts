import { ApiClientFactory, ApiClientFactoryInterface } from "@/src/shared/api-client";
import { HttpHeaders } from "@/src/shared/utils";
import { NotificationManager } from "@/src/entities/notification/api/NotificationManager";

export class NotificationManagerFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/notification-settings`, headers);
    }

    public createNotificationManager(authToken: string) {
        return new NotificationManager(this.apiClientFactory.createAuthorizedClient(authToken));
    }
}
