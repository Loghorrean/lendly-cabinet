"use client";

import { createProfileManager } from "@/src/entities/profile/api/createProfileManager";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { UserProfile } from "@/src/entities/profile/model";

const queryFn = async () => {
    const profileManager = await createProfileManager();
    return profileManager.getProfile();
};

export const useGetProfileQuery = (options?: Omit<UseQueryOptions<UserProfile>, "queryFn">) => {
    return useQuery({
        ...options,
        queryFn: queryFn,
        queryKey: options?.queryKey ?? ["profile"],
    });
};
