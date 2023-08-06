import styles from "./ExternalTransactionsBlock.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import { Money } from "@/src/shared/ui/utils";

const ExternalTransactionsBlock = () => {
    return (
        <CommonBlock className={styles.external_transactions_block}>
            <div className={styles.external_transactions_block__entry}>
                <p className={styles.external_transactions_block__label}>Всего зачислено</p>
                <p className={styles.external_transactions_block__money}>
                    <Money money={{ amount: 18000000000, currencyCode: "RUB" }} />
                </p>
            </div>
            <div className={styles.external_transactions_block__entry}>
                <p className={styles.external_transactions_block__label}>Всего выведено</p>
                <p className={styles.external_transactions_block__money}>
                    <Money money={{ amount: 18000000000, currencyCode: "RUB" }} />
                </p>
            </div>
        </CommonBlock>
    );
};

export default ExternalTransactionsBlock;
