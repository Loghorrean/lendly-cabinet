import { ApiClientInterface } from "@/src/shared/api-client";
import { LegalDocumentType } from "@/src/entities/legal-document/model/LegalDocumentType";
import { DataCollection } from "@/src/shared/models/common";
import { LegalDocument } from "@/src/entities/legal-document/model";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";

export class LegalDocumentProvider {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getList(
        type: LegalDocumentType,
        page: number,
        perPage: number
    ): Promise<DataCollection<LegalDocument>> {
        return this.apiClient.get(`/${buildQuery({ type, page, perPage })}`);
    }
}
