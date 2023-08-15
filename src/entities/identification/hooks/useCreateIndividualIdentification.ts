import { IndividualIdentification } from "@/src/entities/identification/model";
import { createIdentificationManager } from "@/src/entities/identification/api";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const mutateFn = async (identification: IndividualIdentification) => {
    const manager = await createIdentificationManager();
    return manager.createIndividualIdentification(identification);
};

export const useCreateIndividualIdentification = (
    options?: Omit<UseMutationOptions<void, unknown, IndividualIdentification>, "mutationFn">
) => {
    return useMutation({
        ...options,
        mutationFn: mutateFn,
        mutationKey: options?.mutationKey ?? ["create-individual-identification"],
    });
};
