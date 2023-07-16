import CommonTableRow from "@/src/shared/ui/blocks/CommonTable/composables/CommonTableRow";
import styles from "./PrimaryMarketOffer.module.scss";
import RoundProgressBar from "@/src/shared/ui/utils/RoundProgressBar";
import { Money, Tooltip } from "@/src/shared/ui/utils";
import QuestionBlock from "@/src/shared/ui/utils/QuestionBlock";
import TooltipContent from "@/src/shared/ui/utils/Tooltip/composables/TooltipContent";
import CommonTableCell from "@/src/shared/ui/blocks/CommonTable/composables/CommonTableCell";
import ProgressBar from "@/src/shared/ui/utils/ProgressBar";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { ProjectLink } from "@/src/shared/ui/links";

const PrimaryMarketOffer = () => {
    return (
        <CommonTableRow className={styles.primary_market_offer}>
            <div className={styles.primary_market_offer__main}>
                <RoundProgressBar amount={64}>
                    <text
                        className={styles.primary_market_offer__percent}
                        x="50%"
                        y="50%"
                        dy="-0.1em"
                        textAnchor="middle"
                    >
                        64%
                    </text>
                    <text
                        className={styles.primary_market_offer__percent_text}
                        x="50%"
                        y="50%"
                        dy="1.25em"
                        textAnchor="middle"
                    >
                        LTV
                    </text>
                </RoundProgressBar>
                <div>
                    <div className={styles.primary_market_offer__types}>
                        <div className={styles.primary_market_offer__type}>Проект</div>
                    </div>
                    <p className={styles.primary_market_offer__title}>ООО Эстетик Вижен Плюс</p>
                    <span className={styles.primary_market_offer__id}>ID 332932-7666</span>
                </div>
            </div>
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
