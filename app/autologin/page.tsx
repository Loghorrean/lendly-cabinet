"use client";

import { useRouter, useSearchParams } from "next/navigation";
import PageLoader from "@/src/shared/ui/loaders/PageLoader";
import { isValueEmpty } from "@/src/shared/utils";
import AutoLoginBlock from "@/src/entities/auth/ui/AutoLoginBlock";

export default function AutoLoginPage() {
    const router = useRouter();
    const params = useSearchParams();
    const token = params.get("token");
    if (isValueEmpty(token)) {
        router.push("/auth/login");
        return <PageLoader />;
    }
    return <AutoLoginBlock token={token} />;
}
