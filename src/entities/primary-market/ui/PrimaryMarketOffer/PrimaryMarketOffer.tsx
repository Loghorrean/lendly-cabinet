import CommonTableRow from "@/src/shared/ui/blocks/CommonTable/composables/CommonTableRow";
import styles from "./PrimaryMarketOffer.module.scss";
import { Money, Tooltip } from "@/src/shared/ui/utils";
import QuestionBlock from "@/src/shared/ui/utils/QuestionBlock";
import TooltipContent from "@/src/shared/ui/utils/Tooltip/composables/TooltipContent";
import ProgressBar from "@/src/shared/ui/utils/ProgressBar";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { ProjectLink } from "@/src/shared/ui/links";
import CommonInvestmentTitle from "@/src/entities/investment/ui/CommonInvestmentTitle";
import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import { hexIdToDec } from "@/src/shared/utils";
import { FundraisingProject } from "@/src/entities/project/model/FundraisingProject";

type Props = {
    project: FundraisingProject;
};

const PrimaryMarketOffer = ({ project }: Props) => {
    const type = () => {
        return "Проект";
    };
    const investedPercent = () => {
        return parseFloat((((project.investedSum?.amount ?? 0) / project.targetSum.amount) * 100).toFixed(2));
    };
    return (
        <CommonTableRow className={styles.primary_market_offer}>
            <CommonInvestmentTitle
                percentage={investedPercent()}
                type={type()}
                title={project.name}
                id={project.paymentCode ?? hexIdToDec(project.uuid)}
            />
            <CommonTable.Cell className={styles.primary_market_offer__value}>
                <span>{project.interestRate ?? 0}%</span>
                <Tooltip tooltipContent={<TooltipContent>Ожидаемая доходность</TooltipContent>}>
                    <QuestionBlock />
                </Tooltip>
            </CommonTable.Cell>
            <CommonTable.Cell className={styles.primary_market_offer__value}>
                {project.initialTerm ?? 0} мес.
            </CommonTable.Cell>
            <div className={styles.primary_market_offer__progress}>
                <div className={styles.primary_market_offer__progress_values}>
                    <div className={styles.primary_market_offer__value}>
                        <Money money={project.investedSum ?? { amount: 0, currencyCode: "RUB" }} abbreviated />
                    </div>
                    <div className={styles.primary_market_offer__rounds}>Раунд 1 / 10</div>
                    <div className={styles.primary_market_offer__value}>
                        <Money money={project.targetSum} abbreviated />
                    </div>
                </div>
                <ProgressBar amount={investedPercent()} />
            </div>
            <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                <ProjectLink className={styles.primary_market_offer__link} href={`/project/${project.uuid}`}>
                    Инвестировать
                </ProjectLink>
            </PrimaryButton>
        </CommonTableRow>
    );
};

export default PrimaryMarketOffer;
