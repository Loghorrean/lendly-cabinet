import styles from "./SecondaryMarketOffer.module.scss";
import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import CommonInvestmentTitle from "@/src/entities/investment/ui/CommonInvestmentTitle";
import { SellingOffer } from "@/src/entities/offer/model";
import TrafficLight from "@/src/shared/ui/utils/TrafficLight";
import { TRAFFIC_INDICATOR_COLOR } from "@/src/shared/ui/utils/TrafficLight/TrafficLight";
import { Money, Tooltip } from "@/src/shared/ui/utils";
import TooltipContent from "@/src/shared/ui/utils/Tooltip/composables/TooltipContent";
import QuestionBlock from "@/src/shared/ui/utils/QuestionBlock";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { ProjectLink } from "@/src/shared/ui/links";

type Props = {
    offer: SellingOffer;
};

const SecondaryMarketOffer = ({ offer }: Props) => {
    return (
        <CommonTable.Row className={styles.secondary_market_offer}>
            <CommonInvestmentTitle
                percentage={64}
                types={["L", "Buy back", "Заем"]}
                title="ООО Эстетик вижен Плюс"
                id="123"
            />
            <CommonTable.Cell className={styles.secondary_market_offer__amount}>
                <Tooltip tooltipContent={<TooltipContent>Судебное производство</TooltipContent>}>
                    <TrafficLight color={TRAFFIC_INDICATOR_COLOR.GREEN} />
                </Tooltip>
                <Money
                    money={{ amount: 94488200, currencyCode: "RUB" }}
                    className={styles.secondary_market_offer__text}
                />
                <Tooltip tooltipContent={<TooltipContent>Размер предложения</TooltipContent>}>
                    <QuestionBlock />
                </Tooltip>
            </CommonTable.Cell>
            <CommonTable.Cell>
                <Money
                    money={{ amount: 194488200, currencyCode: "RUB" }}
                    className={styles.secondary_market_offer__text}
                />
            </CommonTable.Cell>
            <CommonTable.Cell className={styles.secondary_market_offer__text}>20 мес.</CommonTable.Cell>
            <CommonTable.Cell className={styles.secondary_market_offer__profit}>
                <span className={styles.secondary_market_offer__text}>18%</span>
                <Tooltip tooltipContent={<TooltipContent>Доходность</TooltipContent>}>
                    <QuestionBlock />
                </Tooltip>
            </CommonTable.Cell>
            <CommonTable.Cell>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                    <ProjectLink href={`/offer/${offer.uuid}`} className={styles.secondary_market_offer__link}>
                        Инвестировать
                    </ProjectLink>
                </PrimaryButton>
            </CommonTable.Cell>
        </CommonTable.Row>
    );
};

export default SecondaryMarketOffer;
