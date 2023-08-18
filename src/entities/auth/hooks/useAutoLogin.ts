import { useMutation } from "@tanstack/react-query";
import { BearerToken } from "@/src/entities/auth/model";
import { createAuthManager } from "@/src/entities/auth/api";

const loginMutationFn = async ({ token }: { token: string }) => {
    const manager = createAuthManager();
    return manager.autologin(token);
};

export const useAutoLogin = () => {
    return useMutation<BearerToken, unknown, { token: string }>({
        mutationKey: ["autologin"],
        mutationFn: loginMutationFn,
    });
};
