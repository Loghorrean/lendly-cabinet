import { LegalDocumentProviderFactory } from "@/src/entities/legal-document/api/LegalDocumentProviderFactory";
import { appConfig } from "@/src/shared/configs";
import { getBaseHeaders } from "@/src/shared/api-client/di";
import { getAuthToken } from "@/src/entities/auth/utils";

export const createLegalDocumentProvider = async () => {
    const factory = new LegalDocumentProviderFactory(appConfig.apiBaseUrl, getBaseHeaders());
    return factory.createLegalDocumentProvider(await getAuthToken());
};
