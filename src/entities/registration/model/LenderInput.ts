import { LenderType } from "@/src/entities/registration/model/LenderType";

export interface LenderInput {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly type: LenderType;
    readonly referrerCode?: string;
}
