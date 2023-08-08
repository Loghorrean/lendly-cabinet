import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { createProfileManager } from "@/src/entities/profile/api/createProfileManager";
import { UuidResult } from "@/src/shared/models/common";

const mutateFn = async () => {
    const manager = await createProfileManager();
    return manager.sendChangePasswordRequest();
};

export const useSendChangePasswordRequestMutation = (
    options?: Omit<UseMutationOptions<UuidResult, unknown>, "mutationFn">
) => {
    return useMutation({
        ...options,
        mutationFn: mutateFn,
        mutationKey: options?.mutationKey ?? ["change-password-request"],
    });
};
