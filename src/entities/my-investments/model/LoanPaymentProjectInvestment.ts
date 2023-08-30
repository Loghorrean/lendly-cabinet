import { ShortProject } from "@/src/entities/project/model";
import { ProjectInvestment } from "@/src/entities/my-investments/model/ProjectInvestment";
import { Money } from "@/src/shared/models/common";
import { ShortRepayment } from "@/src/entities/repayment/model";

export interface LoanPaymentProjectInvestment {
    readonly project: ShortProject;
    readonly investments: Array<ProjectInvestment>;
    readonly investedSum: Money;
    readonly nextRepayment?: ShortRepayment;
}
