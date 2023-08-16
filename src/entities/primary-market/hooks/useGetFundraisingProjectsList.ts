"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { FundraisingProject, PrimaryMarketListFilter } from "@/src/entities/primary-market/model";
import { DataCollection } from "@/src/shared/models/common";
import { createPrimaryProjectProvider } from "@/src/entities/primary-market/api";

type FundraisingProjectsListInput = {
    filter: PrimaryMarketListFilter;
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
            const provider = await createPrimaryProjectProvider();
            return provider.getList(filter, page, perPage);
        },
    });
};
