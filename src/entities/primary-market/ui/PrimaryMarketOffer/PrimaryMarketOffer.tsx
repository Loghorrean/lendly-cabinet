import CommonTableRow from "@/src/shared/ui/blocks/CommonTable/composables/CommonTableRow";
import styles from "./PrimaryMarketOffer.module.scss";
import { Money, Tooltip } from "@/src/shared/ui/utils";
import QuestionBlock from "@/src/shared/ui/utils/QuestionBlock";
import TooltipContent from "@/src/shared/ui/utils/Tooltip/composables/TooltipContent";
import CommonTableCell from "@/src/shared/ui/blocks/CommonTable/composables/CommonTableCell";
import ProgressBar from "@/src/shared/ui/utils/ProgressBar";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { ProjectLink } from "@/src/shared/ui/links";
import CommonInvestmentTitle from "@/src/entities/investment/ui/CommonInvestmentTitle";

const PrimaryMarketOffer = () => {
    return (
        <CommonTableRow className={styles.primary_market_offer}>
            <CommonInvestmentTitle percentage={64} type="Проект" title="ООО Эстетик Вижен Плюс" id="332932-7666" />
            <CommonTableCell className={styles.primary_market_offer__value}>
                <span>18%</span>
                <Tooltip tooltipContent={<TooltipContent>Ожидаемая доходность</TooltipContent>}>
                    <QuestionBlock />
                </Tooltip>
            </CommonTableCell>
            <CommonTableCell className={styles.primary_market_offer__value}>20 мес.</CommonTableCell>
            <div className={styles.primary_market_offer__progress}>
                <div className={styles.primary_market_offer__progress_values}>
                    <div className={styles.primary_market_offer__value}>
                        <Money money={{ amount: 1400000000, currencyCode: "RUB" }} abbreviated />
                    </div>
                    <div className={styles.primary_market_offer__rounds}>Раунд 1 / 10</div>
                    <div className={styles.primary_market_offer__value}>
                        <Money money={{ amount: 1800000000, currencyCode: "RUB" }} abbreviated />
                    </div>
                </div>
                <ProgressBar amount={64} />
            </div>
            <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                <ProjectLink className={styles.primary_market_offer__link} href={`/project/123`}>
                    Инвестировать
                </ProjectLink>
            </PrimaryButton>
        </CommonTableRow>
    );
};

export default PrimaryMarketOffer;
