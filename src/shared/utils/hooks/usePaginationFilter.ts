"use client";

import { Dispatch, SetStateAction, useState } from "react";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";
import { getQueryObject } from "@/src/shared/utils";

export function usePaginationFilter<T extends Record<string, any>>(initial?: T): [T, Dispatch<SetStateAction<T>>] {
    const [filter, setFilter] = useState<T>(
        initial ??
            (() => {
                const query = window.location.href;
                if (query.indexOf("?") === -1) {
                    return {} as T;
                }
                const queryObj = getQueryObject<{ filter: T }>(query.slice(query.indexOf("?")));
                return queryObj.filter ?? {};
            })
    );
    const handleFilter = (newFilter: T | ((prev: T) => T)) => {
        const queryFilter: T = typeof newFilter === "function" ? newFilter(filter) : newFilter;
        window.history.pushState(null, "", `?${buildQuery({ filter: queryFilter })}`);
        setFilter(queryFilter);
    };
    return [filter, handleFilter];
}
