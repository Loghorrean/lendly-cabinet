import styles from "./AllPortfolioStatistics.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";

const AllPortfolioStatistics = () => {
    return (
        <CommonBlock className={styles.all_portfolio_statistics}>
            <CommonBlock.Title>Общий портфель</CommonBlock.Title>
        </CommonBlock>
    );
};

export default AllPortfolioStatistics;
