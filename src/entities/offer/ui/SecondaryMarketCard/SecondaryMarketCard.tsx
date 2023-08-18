import styles from "./SecondaryMarketCard.module.scss";
import { SellingOffer } from "@/src/entities/offer/model";
import noImagePicture from "@/public/images/project/no-image.png";
import RoundProgressBar from "@/src/shared/ui/utils/RoundProgressBar";
import { ProjectImage } from "@/src/shared/ui/images";
import TrafficLight from "@/src/shared/ui/utils/TrafficLight";
import { TRAFFIC_INDICATOR_COLOR } from "@/src/shared/ui/utils/TrafficLight/TrafficLight";
import { Money, Tooltip } from "@/src/shared/ui/utils";
import QuestionBlock from "@/src/shared/ui/utils/QuestionBlock";
import TooltipContent from "@/src/shared/ui/utils/Tooltip/composables/TooltipContent";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { ProjectLink } from "@/src/shared/ui/links";

type Props = {
    offer: SellingOffer;
};

const SecondaryMarketCard = ({ offer }: Props) => {
    return (
        <li className={styles.secondary_market_card}>
            <div className={styles.secondary_market_card__image_container}>
                <div className={styles.secondary_market_card__ltv}>
                    <RoundProgressBar amount={64}>
                        <text
                            className={styles.secondary_market_card__percent}
                            x="50%"
                            y="50%"
                            dy="-0.1em"
                            textAnchor="middle"
                        >
                            64%
                        </text>
                        <text
                            className={styles.secondary_market_card__percent_text}
                            x="50%"
                            y="50%"
                            dy="1.25em"
                            textAnchor="middle"
                        >
                            LTV
                        </text>
                    </RoundProgressBar>
                </div>
                <ProjectImage src={noImagePicture} alt="No image found" fill />
            </div>
            <div className={styles.secondary_market_card__content}>
                <header>
                    <ul className={styles.secondary_market_card__types}>
                        <li className={styles.secondary_market_card__type}>L</li>
                        <li className={styles.secondary_market_card__type}>Проект</li>
                    </ul>
                    <p className={styles.secondary_market_card__name}>ООО Эстетик Вижен</p>
                    <p className={styles.secondary_market_card__id}>ID {offer.project.paymentCode}</p>
                </header>
                <Tooltip tooltipContent={<TooltipContent>Какой-то текст</TooltipContent>}>
                    <div className={styles.secondary_market_card__status}>
                        <TrafficLight color={TRAFFIC_INDICATOR_COLOR.GREEN} bordered={false} />
                        <span>Нет</span>
                    </div>
                </Tooltip>
                <div className={styles.secondary_market_card__parameters}>
                    <div className={styles.secondary_market_card__parameter}>
                        <div className={styles.secondary_market_card__label}>Предложение</div>
                        <div className={styles.secondary_market_card__value}>
                            <Money money={{ amount: 12294488200, currencyCode: "RUB" }} />
                        </div>
                    </div>
                    <div className={styles.secondary_market_card__parameter}>
                        <div className={styles.secondary_market_card__label}>Цена</div>
                        <div className={styles.secondary_market_card__value}>
                            <Money money={{ amount: 194488200, currencyCode: "RUB" }} />
                        </div>
                    </div>
                    <div className={styles.secondary_market_card__parameter}>
                        <div className={styles.secondary_market_card__label}>Доходность</div>
                        <div className={styles.secondary_market_card__value}>
                            <span>{offer.profit}%</span>
                            <Tooltip tooltipContent={<TooltipContent>Текущая доходность</TooltipContent>}>
                                <QuestionBlock />
                            </Tooltip>
                        </div>
                    </div>
                    <div className={styles.secondary_market_card__parameter}>
                        <div className={styles.secondary_market_card__label}>Срок</div>
                        <div className={styles.secondary_market_card__value}>
                            <span>{offer.project.initialTerm} мес.</span>
                            <Tooltip tooltipContent={<TooltipContent>Срок в месяцах</TooltipContent>}>
                                <QuestionBlock />
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                    <ProjectLink href={`/offer/${offer.uuid}`}>Инвестировать</ProjectLink>
                </PrimaryButton>
            </div>
        </li>
    );
};

export default SecondaryMarketCard;
