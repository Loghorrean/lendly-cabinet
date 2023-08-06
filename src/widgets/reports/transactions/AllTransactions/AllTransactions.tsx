import styles from "./AllTransactions.module.scss";
import TransactionsList from "@/src/widgets/reports/transactions/TransactionsList";

const AllTransactions = () => {
    return (
        <div className={styles.all_transactions}>
            <TransactionsList />
        </div>
    );
};

export default AllTransactions;
