import styles from "./LastTransactionsList.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";

const LastTransactionsList = () => {
    return (
        <CommonBlock className={styles.last_transactions_list}>
            <header>
                <CommonBlock.Title>Последние транзакции</CommonBlock.Title>
            </header>
        </CommonBlock>
    );
};

export default LastTransactionsList;
