import { ApiClientInterface } from "@/src/shared/api-client";
import {
    EntrepreneurIdentification,
    IndividualIdentification,
    LegalEntityIdentification,
} from "@/src/entities/identification/model";

export class IdentificationManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async createIndividualIdentification(identification: IndividualIdentification) {
        await this.apiClient.post("/individual", { identification });
    }

    public async createEntrepreneurIdentification(identification: EntrepreneurIdentification) {
        await this.apiClient.post("/entrepreneur", { identification });
    }

    public async createLegalEntityIdentification(identification: LegalEntityIdentification) {
        await this.apiClient.post("/legal-entity", { identification });
    }
}
