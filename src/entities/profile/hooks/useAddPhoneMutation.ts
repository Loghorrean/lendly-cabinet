import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { createProfileManager } from "@/src/entities/profile/api/createProfileManager";
import { Phone, PhoneResult } from "@/src/entities/phone/models";

export type AddPhoneInput = {
    phone: Phone;
};

const mutateFn = async (input: AddPhoneInput) => {
    const manager = await createProfileManager();
    return manager.addPhone(input);
};

export const useAddPhoneMutation = (
    options?: Omit<UseMutationOptions<PhoneResult, unknown, AddPhoneInput>, "mutationFn">
) => {
    return useMutation({
        ...options,
        mutationFn: mutateFn,
        mutationKey: options?.mutationKey ?? ["add-phone"],
    });
};
