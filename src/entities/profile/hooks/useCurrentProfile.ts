"use client";

import { useGetProfileQuery } from "@/src/entities/profile/hooks/useGetProfileQuery";
import { isValueEmpty } from "@/src/shared/utils";

export const useCurrentProfile = () => {
    const { data } = useGetProfileQuery({
        staleTime: Infinity,
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        queryKey: ["profile"],
    });
    if (isValueEmpty(data)) {
        throw new Error("Profile is empty, though it should not be");
    }
    return data;
};
