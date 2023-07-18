import { Phone } from "@/src/entities/phone/models/Phone";

export const createDefaultPhone = (): Phone => {
    return {
        countryCode: "RU",
        number: "",
    };
};
