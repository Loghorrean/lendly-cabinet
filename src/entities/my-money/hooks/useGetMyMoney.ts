"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { MyMoney } from "@/src/entities/my-money/model";
import { createMyMoneyProvider } from "@/src/entities/my-money/api";

export const useGetFundraisingProjectsList = (options?: Omit<UseQueryOptions<MyMoney>, "queryFn">) => {
    return useQuery({
        ...options,
        queryKey: options?.queryKey ?? ["my-money"],
        queryFn: async () => {
            const provider = await createMyMoneyProvider();
            return provider.getMyMoney();
        },
    });
};
