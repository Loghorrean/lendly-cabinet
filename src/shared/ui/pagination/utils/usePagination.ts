"use client";

import { paginationConfig } from "@/src/shared/configs";
import { useSearchParams } from "next/navigation";
import { isNotEmpty, RequiredWith } from "@/src/shared/utils";
import { PaginationConfig } from "@/src/shared/ui/pagination/ui/Pagination/Pagination";

type Props = RequiredWith<PaginationConfig, "defaultPerPage" | "firstPage">;

export const usePagination = (props?: Props): { page: number; perPage: number } => {
    console.log(props);
    const params = useSearchParams();
    const validatedPerPage = isNotEmpty(params.get("perPage"))
        ? parseInt(params.get("perPage")!)
        : props?.defaultPerPage ?? paginationConfig.defaultPerPage;
    const page = isNotEmpty(params.get("page"))
        ? parseInt(params.get("page")!)
        : props?.firstPage ?? paginationConfig.defaultFirstPage;
    return {
        page,
        perPage: validatedPerPage,
    };
};
