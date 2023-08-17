"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { DataCollection } from "@/src/shared/models/common";
import { OfferListFilter, SellingOffer } from "@/src/entities/offer/model";
import { createOfferManager } from "@/src/entities/offer/api";

type SellingOffersListInput = {
    filter: OfferListFilter;
    page: number;
    perPage: number;
};

export const useGetOffersList = (
    input: SellingOffersListInput,
    options?: Omit<UseQueryOptions<DataCollection<SellingOffer>>, "queryFn">
) => {
    const { filter, page, perPage } = input;
    return useQuery({
        ...options,
        queryKey: options?.queryKey ?? ["selling-offers-list", JSON.stringify({ filter, page, perPage })],
        queryFn: async () => {
            const provider = await createOfferManager();
            return provider.getOffersList(page, perPage, filter);
        },
    });
};
