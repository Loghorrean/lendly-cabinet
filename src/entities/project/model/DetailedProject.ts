import { ProjectStatus } from "@/src/entities/project/model/enums";
import { ProjectGeneral, ProjectLoan } from "@/src/entities/project/model/composables";

export interface DetailedProject {
    uuid: string;
    paymentCode?: string;
    status: ProjectStatus;
    general: ProjectGeneral;
    loan: ProjectLoan;
}
