"use client";

import { PropsWithChildren } from "react";
import { useGetProfileQuery } from "@/src/entities/profile/hooks";
import { useRouter } from "next/navigation";
import { isValueEmpty, useEffectOnUpdate } from "@/src/shared/utils";
import PageLoader from "@/src/shared/ui/loaders/PageLoader";

//TODO: ADD CHECKING FOR TOKEN
export default function ProtectedLayout({ children }: PropsWithChildren) {
    const { data, isLoading, isError } = useGetProfileQuery({ staleTime: Infinity, retry: false });
    const router = useRouter();
    useEffectOnUpdate(() => {
        router.push("/login");
    }, [isError]);
    return <>{isLoading || isError || isValueEmpty(data) ? <PageLoader /> : children}</>;
}
