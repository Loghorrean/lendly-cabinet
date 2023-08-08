import styles from "./DetailedLoanSeller.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import { Money } from "@/src/shared/ui/utils";

const DetailedLoanSeller = () => {
    return (
        <CommonBlock className={styles.detailed_loan_seller}>
            <header className={styles.detailed_loan_seller__header}>
                <div>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.detailed_loan_seller__heading}>
                        ООО “Лендли Инвест”
                    </Heading>
                    <p className={styles.detailed_loan_seller__text}>
                        Данные о продавце инвестиции по состоянию на 10.04.2023
                    </p>
                </div>
                <div>
                    <Heading headingType={HEADING_TYPE.H3} className={styles.detailed_loan_seller__sub_heading}>
                        OOO “Лендли Инвест” зарегистрирована 22 апреля 2022 года. Компания создана с целью
                        инвестирования на платформе Lendly. Совладельцем ООО “Леднли Инвест” является один из
                        учредителей платформы
                    </Heading>
                    <ul>
                        <li className={styles.detailed_loan_seller__element}>
                            <div className={styles.detailed_loan_seller__element_label}>ИНН</div>
                            <div>0123456789</div>
                        </li>
                        <li className={styles.detailed_loan_seller__element}>
                            <div className={styles.detailed_loan_seller__element_label}>Дата регистрации</div>
                            <div>12.05.2022</div>
                        </li>
                        <li className={styles.detailed_loan_seller__element}>
                            <div className={styles.detailed_loan_seller__element_label}>
                                Дата начала инвестирования на платформе
                            </div>
                            <div>12.05.2022</div>
                        </li>
                    </ul>
                </div>
            </header>
            <div className={styles.detailed_loan_seller__stats}>
                <div className={styles.detailed_loan_seller__stat}>
                    <div className={styles.detailed_loan_seller__stat_header}>Выдано займов на платформе</div>
                    <div className={styles.detailed_loan_seller__stat_value}>
                        <Money money={{ amount: 19773400000, currencyCode: "RUB" }} />
                    </div>
                </div>
                <div className={styles.detailed_loan_seller__stat}>
                    <div className={styles.detailed_loan_seller__stat_header}>Текущий портфель займов на платформе</div>
                    <div className={styles.detailed_loan_seller__stat_footer}>
                        <div className={styles.detailed_loan_seller__stat_disclaimers}>
                            <div className={styles.detailed_loan_seller__stat_disclaimer}>
                                С просрочкой более 30 дней - 0 ₽/0
                            </div>
                            <div className={styles.detailed_loan_seller__stat_disclaimer}>
                                С просрочкой более 30 дней - 0 ₽/0
                            </div>
                        </div>
                        <div className={styles.detailed_loan_seller__stat_value}>
                            <Money money={{ amount: 3173400000, currencyCode: "RUB" }} /> / 14
                        </div>
                    </div>
                </div>
                <div className={styles.detailed_loan_seller__stat}>
                    <div className={styles.detailed_loan_seller__stat_header}>Текущий остаток на номинальном счете</div>
                    <div className={styles.detailed_loan_seller__stat_value}>
                        <Money money={{ amount: 1073400000, currencyCode: "RUB" }} />
                    </div>
                </div>
                <div className={styles.detailed_loan_seller__stat}>
                    <div className={styles.detailed_loan_seller__stat_header}>
                        Текущий объем займов, проданных с гарантией откупа
                    </div>
                    <div className={styles.detailed_loan_seller__stat_footer}>
                        <div className={styles.detailed_loan_seller__stat_disclaimers}>
                            <div className={styles.detailed_loan_seller__stat_disclaimer}>
                                С просрочкой более 10 дней - 0 ₽/0
                            </div>
                            <div className={styles.detailed_loan_seller__stat_disclaimer}>
                                С просрочкой более 30 дней - 0 ₽/0
                            </div>
                            <div className={styles.detailed_loan_seller__stat_disclaimer}>
                                С просрочкой более 60 дней - 0 ₽/0
                            </div>
                        </div>
                        <div className={styles.detailed_loan_seller__stat_value}>
                            <Money money={{ amount: 19773400000, currencyCode: "RUB" }} /> / 14
                        </div>
                    </div>
                </div>
                <div className={styles.detailed_loan_seller__stat}>
                    <div className={styles.detailed_loan_seller__stat_header}>
                        Доступный лимит продажи с гарантией откупа
                    </div>
                    <div className={styles.detailed_loan_seller__stat_value}>
                        <Money money={{ amount: 5473400000, currencyCode: "RUB" }} />
                    </div>
                </div>
            </div>
        </CommonBlock>
    );
};

export default DetailedLoanSeller;
