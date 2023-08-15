import { IdentificationPerson } from "@/src/entities/identification/model/composables";

export const createDefaultPerson = (): IdentificationPerson => {
    return {
        firstName: "",
        lastName: "",
        middleName: "",
        birthplace: "",
        birthday: "",
    };
};
