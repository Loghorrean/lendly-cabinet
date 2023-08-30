import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./DetailedLoanDetails.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import { Money, Tooltip } from "@/src/shared/ui/utils";
import QuestionBlock from "@/src/shared/ui/utils/QuestionBlock";
import TooltipContent from "@/src/shared/ui/utils/Tooltip/composables/TooltipContent";

const DetailedLoanDetails = () => {
    return (
        <CommonBlock large className={styles.detailed_loan_details}>
            <Heading headingType={HEADING_TYPE.H2} className={styles.detailed_loan_details__heading}>
                Детали сделки
            </Heading>
            <div className={styles.detailed_loan_details__details}>
                <ul>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>
                            Изначальный срок погашения займа
                        </div>
                        <div>4 мес.</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>
                            Оставшийся срок погашения займа
                        </div>
                        <div>20 дн.</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>Срок действия оферты</div>
                        <div>01.07.2023</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>Размер займа:</div>
                        <div>
                            <Money money={{ amount: 10000000000, currencyCode: "RUB" }} />
                        </div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>Размер предложения:</div>
                        <div>
                            <Money money={{ amount: 8000000000, currencyCode: "RUB" }} />
                        </div>
                    </li>
                </ul>
                <ul>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>
                            Ставка займа
                            <Tooltip tooltipContent={<TooltipContent>Ставка займа</TooltipContent>}>
                                <QuestionBlock />
                            </Tooltip>
                        </div>
                        <div>10%</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>Продаваемая ставка</div>
                        <div>12%</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>
                            Комиссия за управление залогом
                        </div>
                        <div>1%</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>Итоговая ставка для инвестора</div>
                        <div>9%</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>Стоимость залога</div>
                        <div>
                            <Money money={{ amount: 1000000, currencyCode: "RUB" }} />
                        </div>
                    </li>
                </ul>
            </div>
        </CommonBlock>
    );
};

export default DetailedLoanDetails;
