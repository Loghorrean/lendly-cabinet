import { IndividualIdentification } from "@/src/entities/identification/model/IndividualIdentification";
import { IdentificationCompany } from "@/src/entities/identification/model/composables";

export interface LegalEntityIdentification extends IndividualIdentification {
    company: IdentificationCompany;
}
