export interface Company {
    readonly id: string;
    readonly inn: string;
    readonly name: string;
    readonly address: string;
    readonly contactPerson?: string;
}
