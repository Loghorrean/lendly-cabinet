"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { DataCollection } from "@/src/shared/models/common";
import { TransactionListFilter } from "@/src/entities/transaction/model/filter";
import { Transaction } from "@/src/entities/transaction/model";
import { createTransactionProvider } from "@/src/entities/transaction/api";

type TransactionsListInput = {
    filter: TransactionListFilter;
    page: number;
    perPage: number;
};

export const useGetTransactionsList = (
    input: TransactionsListInput,
    options?: Omit<UseQueryOptions<DataCollection<Transaction>>, "queryFn">
) => {
    const { filter, page, perPage } = input;
    return useQuery({
        ...options,
        queryKey: options?.queryKey ?? ["transactions-list", JSON.stringify({ filter, page, perPage })],
        queryFn: async () => {
            const provider = await createTransactionProvider();
            return provider.getTransactionsList(page, perPage, filter);
        },
    });
};
