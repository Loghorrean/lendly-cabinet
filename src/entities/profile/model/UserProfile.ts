import { Role, UserStatus } from "@/src/entities/user";
import { Money } from "@/src/shared/models/common";
import { Phone } from "@/src/entities/phone/models";
import { BorrowerProfile, LenderProfile } from "@/src/entities/profile/model";

export interface UserProfile {
    readonly uuid: string;
    readonly role: Role;
    readonly status: UserStatus;
    readonly email: string;
    readonly name: string;
    readonly balance: Money;
    readonly reservedFunds: Money;
    readonly paymentCode: string;
    readonly phone?: Phone;
    readonly phoneVerified: boolean;
    readonly borrower?: BorrowerProfile;
    readonly lender?: LenderProfile;
}
