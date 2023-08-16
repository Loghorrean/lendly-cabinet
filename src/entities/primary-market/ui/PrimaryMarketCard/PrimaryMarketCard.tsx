import { FundraisingProject } from "@/src/entities/project/model/FundraisingProject";
import styles from "./PrimaryMarketCard.module.scss";
import noImagePicture from "@/public/images/project/no-image.png";
import { ProjectImage } from "@/src/shared/ui/images";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import { Money, Tooltip } from "@/src/shared/ui/utils";
import QuestionBlock from "@/src/shared/ui/utils/QuestionBlock";
import TooltipContent from "@/src/shared/ui/utils/Tooltip/composables/TooltipContent";
import ProgressBar from "@/src/shared/ui/utils/ProgressBar";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { ProjectLink } from "@/src/shared/ui/links";
import { cn } from "@/src/shared/utils";

type Props = {
    project: FundraisingProject;
};

const PrimaryMarketCard = ({ project }: Props) => {
    const type = () => {
        return "Проект";
    };
    const investedPercent = () => {
        return parseFloat((((project.investedSum?.amount ?? 0) / project.targetSum.amount) * 100).toFixed(2));
    };
    return (
        <li className={styles.primary_market_card}>
            <div className={styles.primary_market_card__image_container}>
                <ProjectImage src={noImagePicture} alt="No image found" fill />
            </div>
            <div className={styles.primary_market_card__content}>
                <header className={styles.primary_market_card__header}>
                    <div className={styles.primary_market_card__tags}>
                        <div className={styles.primary_market_card__tag}>L</div>
                        <div className={styles.primary_market_card__tag}>{type()}</div>
                    </div>
                    <div>
                        <Heading headingType={HEADING_TYPE.H3} className={styles.primary_market_card__name}>
                            {project.name}
                        </Heading>
                        <p className={styles.primary_market_card__id}>ID {project.paymentCode}</p>
                    </div>
                </header>
                <div>
                    <div className={styles.primary_market_card__parameters}>
                        <div className={styles.primary_market_card__parameter}>
                            <p className={styles.primary_market_card__label}>Ставка</p>
                            <div className={styles.primary_market_card__value}>
                                <span>{project.interestRate}%</span>
                                <Tooltip tooltipContent={<TooltipContent>Процентная доходность</TooltipContent>}>
                                    <QuestionBlock />
                                </Tooltip>
                            </div>
                        </div>
                        <div className={styles.primary_market_card__parameter}>
                            <p className={styles.primary_market_card__label}>Срок</p>
                            <div className={styles.primary_market_card__value}>
                                <span>{project.initialTerm}мес.</span>
                                <Tooltip tooltipContent={<TooltipContent>Время до окончания проекта</TooltipContent>}>
                                    <QuestionBlock />
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    <div className={styles.primary_market_card__progress}>
                        <div className={styles.primary_market_card__progress_labels}>
                            <span className={styles.primary_market_card__progress_label}>Набрано</span>
                            <span className={styles.primary_market_card__progress_label}>Цель</span>
                        </div>
                        <div className={styles.primary_market_card__progress_values}>
                            <Money money={project.investedSum ?? { amount: 0, currencyCode: "RUB" }} abbreviated />
                            <span
                                className={cn(
                                    styles.primary_market_card__progress_label,
                                    styles.primary_market_card__progress_rounds
                                )}
                            >
                                Раунд 1 / 10
                            </span>
                            <Money money={project.targetSum} abbreviated />
                        </div>
                        <ProgressBar amount={investedPercent()} />
                    </div>
                </div>
                <footer>
                    <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE} wide>
                        <ProjectLink href={`/project/${project.uuid}`}>Инвестировать</ProjectLink>
                    </PrimaryButton>
                </footer>
            </div>
        </li>
    );
};

export default PrimaryMarketCard;
