import { EntrepreneurIdentification } from "@/src/entities/identification/model";
import { createIdentificationManager } from "@/src/entities/identification/api";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const mutateFn = async (identification: EntrepreneurIdentification) => {
    const manager = await createIdentificationManager();
    return manager.createEntrepreneurIdentification(identification);
};

export const useCreateEntrepreneurIdentification = (
    options?: Omit<UseMutationOptions<void, unknown, EntrepreneurIdentification>, "mutationFn">
) => {
    return useMutation({
        ...options,
        mutationFn: mutateFn,
        mutationKey: options?.mutationKey ?? ["create-entrepreneur-identification"],
    });
};
