import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./DetailedLoanDetails.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import { Money, Tooltip } from "@/src/shared/ui/utils";
import QuestionBlock from "@/src/shared/ui/utils/QuestionBlock";
import TooltipContent from "@/src/shared/ui/utils/Tooltip/composables/TooltipContent";
import { ProjectLoan } from "@/src/entities/project/model/composables";
import { formatDate } from "@/src/shared/utils";

type Props = {
    loan: ProjectLoan;
};

const DetailedLoanDetails = ({ loan }: Props) => {
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
                        <div>{loan.initialTerm} мес.</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>
                            Оставшийся срок погашения займа
                        </div>
                        <div>ДОБАВИТЬ</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>Срок действия оферты</div>
                        <div>{formatDate(new Date(loan.maturityDate))}</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>Размер займа:</div>
                        <div>
                            <Money money={loan.loanSum} />
                        </div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>Размер предложения:</div>
                        <div>
                            Добавить
                            {/*<Money money={loa} />*/}
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
                        <div>{loan.interestRate}%</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>Продаваемая ставка</div>
                        <div>Добавить</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>
                            Комиссия за управление залогом
                        </div>
                        <div>Добавить</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>Итоговая ставка для инвестора</div>
                        <div>Добавить</div>
                    </li>
                    <li className={styles.detailed_loan_details__element}>
                        <div className={styles.detailed_loan_details__element_label}>Стоимость залога</div>
                        <div>
                            Добавить
                            {/*<Money money={{ amount: 1000000, currencyCode: "RUB" }} />*/}
                        </div>
                    </li>
                </ul>
            </div>
        </CommonBlock>
    );
};

export default DetailedLoanDetails;
