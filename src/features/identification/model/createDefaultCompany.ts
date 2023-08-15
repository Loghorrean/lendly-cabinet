import { IdentificationCompany } from "@/src/entities/identification/model/composables";

export const createDefaultCompany = (): IdentificationCompany => {
    return {
        name: "",
        siteUrl: "",
        address: "",
        inn: "",
        ogrnip: "",
        kpp: "",
    };
};
