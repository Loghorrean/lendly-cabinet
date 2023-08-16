import { ApiClientInterface } from "@/src/shared/api-client";
import { NotificationSettings } from "@/src/entities/notification/model";

export class NotificationManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public getSettings(): Promise<NotificationSettings> {
        return this.apiClient.get("/");
    }

    public setSettings(notificationSettings: NotificationSettings) {
        return this.apiClient.post("/", notificationSettings);
    }
}
