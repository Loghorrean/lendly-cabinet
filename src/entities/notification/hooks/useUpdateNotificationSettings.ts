import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { createNotificationManager } from "@/src/entities/notification/api";
import { NotificationSettings } from "@/src/entities/notification/model";

const mutateFn = async (settings: NotificationSettings) => {
    const manager = await createNotificationManager();
    return manager.setSettings(settings);
};

export const useUpdateNotificationSettings = (
    options?: Omit<UseMutationOptions<void, unknown, NotificationSettings>, "mutationFn">
) => {
    return useMutation({
        ...options,
        mutationFn: mutateFn,
        mutationKey: options?.mutationKey ?? ["update-notification-settings"],
    });
};
