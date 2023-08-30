"use client";

import { Provider as JotaiProvider } from "jotai";
import { FC, PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

const Providers: FC<PropsWithChildren> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryStreamedHydration>
                <JotaiProvider>{children}</JotaiProvider>
            </ReactQueryStreamedHydration>
        </QueryClientProvider>
    );
};

export default Providers;
