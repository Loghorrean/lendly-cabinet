import styles from "./MoneyDashboard.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import LastTransactionsList from "@/src/widgets/transactions/ui/LastTransactionsList";
import CurrentBalanceStatistics from "@/src/widgets/money/ui/CurrentBalanceStatistics";

const MoneyDashboard = () => {
    return (
        <div className={styles.money_dashboard}>
            <Heading headingType={HEADING_TYPE.H1} className={styles.money_dashboard__heading}>
                Баланс счета
            </Heading>
            <div className={styles.money_dashboard__blocks}>
                <LastTransactionsList />
                <CurrentBalanceStatistics />
            </div>
        </div>
    );
};

export default MoneyDashboard;
