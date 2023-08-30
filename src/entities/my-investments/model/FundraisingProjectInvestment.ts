import { FundraisingProject } from "@/src/entities/project/model";
import { ProjectInvestment } from "@/src/entities/my-investments/model/ProjectInvestment";
import { Money } from "@/src/shared/models/common";

export interface FundraisingProjectInvestment {
    readonly project: FundraisingProject;
    readonly investments: Array<ProjectInvestment>;
    readonly investedSum: Money;
}
