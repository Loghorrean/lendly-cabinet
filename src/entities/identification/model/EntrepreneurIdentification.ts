import { IndividualIdentification } from "@/src/entities/identification/model/IndividualIdentification";

export interface EntrepreneurIdentification extends IndividualIdentification {
    ogrnip: string;
}
