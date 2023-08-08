import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { createRegistrationManager } from "@/src/entities/registration/api/createRegistrationManager";
import { LenderInput, RegisteredUser } from "@/src/entities/registration/model";

const mutateFn = async (input: LenderInput) => {
    const manager = createRegistrationManager();
    return manager.registerLender(input);
};

export const useRegisterLenderMutation = (
    options?: Omit<UseMutationOptions<RegisteredUser, unknown, LenderInput>, "mutationFn">
) => {
    return useMutation({
        ...options,
        mutationFn: mutateFn,
        mutationKey: options?.mutationKey ?? ["register-lender"],
    });
};
