import { UserStatus } from "@/src/entities/user";

export interface LenderInput {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly type: UserStatus;
    readonly referrerCode?: string;
}
