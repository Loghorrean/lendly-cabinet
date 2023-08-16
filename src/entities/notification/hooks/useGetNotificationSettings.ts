"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { createNotificationManager } from "@/src/entities/notification/api";
import { NotificationSettings } from "@/src/entities/notification/model";

const queryFn = async () => {
    const manager = await createNotificationManager();
    return manager.getSettings();
};

export const useGetNotificationSettings = (options?: Omit<UseQueryOptions<NotificationSettings>, "queryFn">) => {
    return useQuery({
        ...options,
        queryFn: queryFn,
        queryKey: options?.queryKey ?? ["notification-settings"],
    });
};
