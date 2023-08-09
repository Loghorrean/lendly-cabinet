import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { createProfileManager } from "@/src/entities/profile/api/createProfileManager";
import { Phone, PhoneResult } from "@/src/entities/phone/models";

export type VerifyPhoneInput = {
    phone: Phone;
    verificationCode: string;
};

const mutateFn = async (input: VerifyPhoneInput) => {
    const manager = await createProfileManager();
    return manager.verifyPhone(input);
};

export const useVerifyPhoneMutation = (
    options?: Omit<UseMutationOptions<PhoneResult, unknown, VerifyPhoneInput>, "mutationFn">
) => {
    return useMutation({
        ...options,
        mutationFn: mutateFn,
        mutationKey: options?.mutationKey ?? ["verify-phone"],
    });
};
