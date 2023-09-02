import styles from "./MyInvestmentsDashboardStatistics.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import { Money } from "@/src/shared/ui/utils";

const MyInvestmentsDashboardStatistics = () => {
    return (
        <CommonBlock className={styles.my_investments_statistics}>
            <header className={styles.my_investments_statistics__heading}>
                <CommonBlock.Title>Статистика по моим инвестициям</CommonBlock.Title>
            </header>
            <div className={styles.my_investments_statistics__table}>
                <header className={styles.my_investments_statistics__header}>
                    <div className={styles.my_investments_statistics__label}>Инвестиция</div>
                    <div className={styles.my_investments_statistics__label}>Кол-во инвестиций</div>
                    <div className={styles.my_investments_statistics__label}>Остаток осн. долга</div>
                </header>
                <ul className={styles.my_investments_statistics__list}>
                    <li className={styles.my_investments_statistics__row}>
                        <div className={styles.my_investments_statistics__cell}>Текущие</div>
                        <div className={styles.my_investments_statistics__cell}>0</div>
                        <div className={styles.my_investments_statistics__cell}>
                            <Money money={{ amount: 35000000, currencyCode: "RUB" }} />
                        </div>
                    </li>
                    <li className={styles.my_investments_statistics__row}>
                        <div className={styles.my_investments_statistics__cell}>В просрочке</div>
                        <div className={styles.my_investments_statistics__cell}>0</div>
                        <div className={styles.my_investments_statistics__cell}>
                            <Money money={{ amount: 35000000, currencyCode: "RUB" }} />
                        </div>
                    </li>
                    <li className={styles.my_investments_statistics__row}>
                        <div className={styles.my_investments_statistics__cell}>Завершенные</div>
                        <div className={styles.my_investments_statistics__cell}>0</div>
                        <div className={styles.my_investments_statistics__cell}>
                            <Money money={{ amount: 35000000, currencyCode: "RUB" }} />
                        </div>
                    </li>
                    <li className={styles.my_investments_statistics__row}>
                        <div className={styles.my_investments_statistics__cell}>Выкупленные с buy back</div>
                        <div className={styles.my_investments_statistics__cell}>0</div>
                        <div className={styles.my_investments_statistics__cell}>
                            <Money money={{ amount: 35000000, currencyCode: "RUB" }} />
                        </div>
                    </li>
                </ul>
            </div>
        </CommonBlock>
    );
};

export default MyInvestmentsDashboardStatistics;
