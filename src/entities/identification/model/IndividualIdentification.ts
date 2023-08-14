import {
    IdentificationAgreements,
    IdentificationPassport,
    IdentificationPerson,
} from "@/src/entities/identification/model/composables";
import { Phone } from "@/src/entities/phone/models";

export interface IndividualIdentification {
    readonly person: IdentificationPerson;
    readonly inn: string;
    readonly registerAddress: string;
    readonly passport: IdentificationPassport;
    readonly phone: Phone;
    readonly agreements: IdentificationAgreements;
}
