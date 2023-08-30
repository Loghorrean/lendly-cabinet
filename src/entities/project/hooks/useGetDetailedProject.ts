"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { createProjectProvider } from "@/src/entities/project/api";
import { DetailedProject } from "@/src/entities/project/model";

type DetailedProjectInput = {
    uuid: string;
};

export const useGetDetailedProject = (
    input: DetailedProjectInput,
    options?: Omit<UseQueryOptions<DetailedProject>, "queryFn">
) => {
    return useQuery({
        ...options,
        queryKey: options?.queryKey ?? ["detailed-project", input.uuid],
        queryFn: async () => {
            const provider = await createProjectProvider();
            return provider.getDetailedProject(input.uuid);
        },
    });
};
