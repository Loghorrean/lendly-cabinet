export interface ShortProject {
    readonly uuid: string;
    readonly paymentCode?: string;
    readonly name: string;
    readonly initialTerm: number;
    readonly interestRate?: number;
}
