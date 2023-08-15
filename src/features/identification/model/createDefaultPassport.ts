import { IdentificationPassport } from "@/src/entities/identification/model/composables";

export const createDefaultPassport = (): IdentificationPassport => {
    return {
        series: "",
        number: "",
        issuedBy: "",
        issuedDate: "",
        departmentCode: "",
        scanCopies: [],
    };
};
