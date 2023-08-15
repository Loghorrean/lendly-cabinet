import { LegalEntityIdentification } from "@/src/entities/identification/model";
import { createIdentificationManager } from "@/src/entities/identification/api";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const mutateFn = async (identification: LegalEntityIdentification) => {
    const manager = await createIdentificationManager();
    return manager.createLegalEntityIdentification(identification);
};

export const useCreateLegalEntityIdentification = (
    options?: Omit<UseMutationOptions<void, unknown, LegalEntityIdentification>, "mutationFn">
) => {
    return useMutation({
        ...options,
        mutationFn: mutateFn,
        mutationKey: options?.mutationKey ?? ["create-legal-entity-identification"],
    });
};
