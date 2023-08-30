"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { DataCollection } from "@/src/shared/models/common";
import { FundraisingProjectInvestment } from "@/src/entities/my-investments/model";
import { createMyInvestmentsProvider } from "@/src/entities/my-investments/api";

type MyFundraisingInvestmentsListInput = {
    page: number;
    perPage: number;
};

export const useGetMyFundraisingInvestmentsList = (
    input: MyFundraisingInvestmentsListInput,
    options?: Omit<UseQueryOptions<DataCollection<FundraisingProjectInvestment>>, "queryFn">
) => {
    const { page, perPage } = input;
    return useQuery({
        ...options,
        queryKey: options?.queryKey ?? ["my-fundraising-investments-list", JSON.stringify({ page, perPage })],
        queryFn: async () => {
            const provider = await createMyInvestmentsProvider();
            return provider.getListFundraising(page, perPage);
        },
    });
};
