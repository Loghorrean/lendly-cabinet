export interface IdentificationPassport {
    readonly series: string;
    readonly number: string;
    readonly issuedDate: string;
    readonly departmentCode: string;
    readonly issuedBy: string;
    readonly scanCopies: Array<string>;
}
