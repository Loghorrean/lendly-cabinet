"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { createLegalDocumentProvider } from "@/src/entities/legal-document/api";
import { LegalDocumentType } from "@/src/entities/legal-document/model/enum/LegalDocumentType";
import { DataCollection } from "@/src/shared/models/common";
import { LegalDocument } from "@/src/entities/legal-document/model";

type LegalDocumentsListInput = {
    type: LegalDocumentType;
    page: number;
    perPage: number;
};

export const useGetLegalDocumentsList = (
    input: LegalDocumentsListInput,
    options?: Omit<UseQueryOptions<DataCollection<LegalDocument>>, "queryFn">
) => {
    const { type, page, perPage } = input;
    return useQuery({
        ...options,
        queryKey: options?.queryKey ?? ["legal-documents-list", JSON.stringify({ type, page, perPage })],
        queryFn: async () => {
            const profileManager = await createLegalDocumentProvider();
            return profileManager.getList(type, page, perPage);
        },
    });
};
