"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { DataCollection } from "@/src/shared/models/common";
import { FundraisingProjectsFilter } from "@/src/entities/project/model/filter";
import { FundraisingProject } from "@/src/entities/project/model/FundraisingProject";
import { createProjectProvider } from "@/src/entities/project/api";

type FundraisingProjectsListInput = {
    filter: FundraisingProjectsFilter;
    page: number;
    perPage: number;
};

export const useGetFundraisingProjectsList = (
    input: FundraisingProjectsListInput,
    options?: Omit<UseQueryOptions<DataCollection<FundraisingProject>>, "queryFn">
) => {
    const { filter, page, perPage } = input;
    return useQuery({
        ...options,
        queryKey: options?.queryKey ?? ["fundraising-projects-list", JSON.stringify({ filter, page, perPage })],
        queryFn: async () => {
            const provider = await createProjectProvider();
            return provider.getFundraisingList(filter, page, perPage);
        },
    });
};
