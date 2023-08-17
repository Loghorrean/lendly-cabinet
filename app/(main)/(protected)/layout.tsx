"use client";

import { PropsWithChildren } from "react";
import { useGetProfileQuery } from "@/src/entities/profile/hooks";
import { useRouter } from "next/navigation";
import { isValueEmpty, useEffectOnUpdate } from "@/src/shared/utils";
import PageLoader from "@/src/shared/ui/loaders/PageLoader";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProtectedLayout({ children }: PropsWithChildren) {
    const { data, isLoading, isError } = useGetProfileQuery({
        staleTime: Infinity,
        retry: false,
        refetchOnWindowFocus: false,
    });
    const router = useRouter();
    useEffectOnUpdate(() => {
        if (isError) {
            console.log("TOKEN INVALID, SENDING TO LOGIN");
            router.push("/auth/login");
        }
    }, [isError]);
    return <>{isLoading || isError || isValueEmpty(data) ? <PageLoader /> : children}</>;
}
