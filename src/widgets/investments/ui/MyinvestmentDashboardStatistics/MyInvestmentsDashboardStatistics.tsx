import styles from "./MyInvestmentsDashboardStatistics.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";

const MyInvestmentsDashboardStatistics = () => {
    return (
        <CommonBlock className={styles.my_investments_statistics}>
            <header className={styles.my_investments_statistics__header}>
                <CommonBlock.Title>Статистика по моим инвестициям</CommonBlock.Title>
            </header>
        </CommonBlock>
    );
};

export default MyInvestmentsDashboardStatistics;
