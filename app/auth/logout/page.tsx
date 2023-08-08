"use client";

import PageLoader from "@/src/shared/ui/loaders/PageLoader";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { createAuthTokenManager } from "@/src/entities/auth/utils";

export default function Logout() {
    const router = useRouter();
    const client = useQueryClient();
    useEffect(() => {
        const tokenManager = createAuthTokenManager();
        tokenManager.remove();
        client.clear();
        router.push("/auth/login");
    }, []);
    return <PageLoader />;
}
