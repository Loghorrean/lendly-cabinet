import styles from "./LastTransactionsList.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import { ProjectLink } from "@/src/shared/ui/links";
import ArrowRightTailed from "@/src/shared/ui/svg/arrows/ArrowRightTailed";

const LastTransactionsList = () => {
    return (
        <CommonBlock className={styles.last_transactions_list}>
            <header className={styles.last_transactions_list__header}>
                <CommonBlock.Title>Последние транзакции</CommonBlock.Title>
                <ProjectLink href="/reports/transactions" className={styles.last_transactions_list__link}>
                    <span>Все транзакции</span>
                    <ArrowRightTailed />
                </ProjectLink>
            </header>
        </CommonBlock>
    );
};

export default LastTransactionsList;
