"use client";

import React, { PropsWithChildren, useMemo } from "react";
import { PaginationContextType } from "../../context/PaginationContext";
import { DataCollection } from "@/src/shared/models/common/DataCollection";
import { usePagination } from "@/src/shared/ui/pagination/utils/usePagination";
import PaginationContextProvider from "../../context/PaginationContext";
import PaginationFooter from "@/src/shared/ui/pagination/ui/composables/PaginationFooter";
import PaginationContent from "@/src/shared/ui/pagination/ui/composables/PaginationContent";
import { paginationConfig } from "@/src/shared/configs";

export type PaginationConfig = {
    firstPage: number;
    defaultPerPage: number;
    pageParam: string;
    perPageParam: string;
    filterParam: string;
};

const defaultConfig: PaginationConfig = {
    firstPage: paginationConfig.defaultFirstPage,
    defaultPerPage: paginationConfig.defaultPerPage,
    pageParam: "page",
    perPageParam: "perPage",
    filterParam: "filter",
};

interface Props {
    loading: boolean;
    totalCount: number;
    config?: PaginationConfig;
    collection?: DataCollection<unknown>;
}

function Pagination({ config, collection, totalCount, loading, children }: PropsWithChildren<Props>) {
    const compiledConfig = useMemo(() => {
        return { ...defaultConfig, ...config };
    }, [config]);

    const variables = usePagination();

    const contextValue: PaginationContextType = {
        pageParam: compiledConfig.pageParam,
        perPageParam: compiledConfig.perPageParam,
        loading,
        totalCount,
        count: collection?.items.length || 0,
        page: variables.page,
        perPage: variables.perPage,
    };

    return <PaginationContextProvider {...contextValue}>{children}</PaginationContextProvider>;
}

Pagination.Content = PaginationContent;
Pagination.Footer = PaginationFooter;

export default Pagination;
