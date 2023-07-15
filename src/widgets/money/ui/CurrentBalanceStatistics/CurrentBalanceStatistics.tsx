import styles from "./CurrentBalanceStatitstics.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";

const CurrentBalanceStatistics = () => {
    return (
        <CommonBlock className={styles.current_balance_statistics}>
            <header>
                <CommonBlock.Title>Баланс</CommonBlock.Title>
            </header>
        </CommonBlock>
    );
};

export default CurrentBalanceStatistics;
