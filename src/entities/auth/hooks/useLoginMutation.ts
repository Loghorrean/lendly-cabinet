import { useMutation } from "@tanstack/react-query";
import { BearerToken } from "@/src/entities/auth/model";
import { createAuthManager } from "@/src/entities/auth/api";

const loginMutationFn = ({ username, password }: { username: string; password: string }) => {
    const manager = createAuthManager();
    return manager.login(username, password);
};

export const useLoginMutation = () => {
    return useMutation<BearerToken, unknown, { username: string; password: string }>({
        mutationKey: ["login"],
        mutationFn: loginMutationFn,
    });
};
