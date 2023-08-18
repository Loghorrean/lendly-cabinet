import { useMutation } from "@tanstack/react-query";
import { AutoLoginToken, BearerToken } from "@/src/entities/auth/model";
import { createAuthManager } from "@/src/entities/auth/api";

const loginMutationFn = async ({ token }: AutoLoginToken) => {
    const manager = createAuthManager();
    return manager.autologin(token);
};

export const useAutoLogin = () => {
    return useMutation<BearerToken, unknown, AutoLoginToken>({
        mutationKey: ["autologin"],
        mutationFn: loginMutationFn,
    });
};
