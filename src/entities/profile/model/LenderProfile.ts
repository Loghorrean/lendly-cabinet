import { IdentificationStatus } from "@/src/entities/identification/model";
import { Money } from "@/src/shared/models/common";

export interface LenderProfile {
    readonly verified: boolean;
    readonly identificationStatus: IdentificationStatus;
    readonly identificationDate?: string;
    readonly identificationNotes?: string;
    readonly hasIdentificationDraft: boolean;
    readonly investmentAllow: boolean;
    readonly investmentLimit?: Money;
    readonly secondaryMarketV2Allow: boolean;
    readonly primaryMarketAllow: boolean;
    readonly primaryMarketAgreement: Array<string>;
}
