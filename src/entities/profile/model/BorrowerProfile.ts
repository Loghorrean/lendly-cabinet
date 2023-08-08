import { Company } from "@/src/entities/company/model";

export interface BorrowerProfile {
    readonly hasProjectRequests: boolean;
    readonly firstProjectRequestUuid?: string;
    readonly company?: Company;
}
