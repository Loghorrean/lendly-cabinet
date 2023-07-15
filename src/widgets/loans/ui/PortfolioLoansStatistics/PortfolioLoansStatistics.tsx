import styles from "./PortfolioLoansStatistics.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";

const PortfolioLoansStatistics = () => {
    return (
        <CommonBlock className={styles.portfolio_loans_statistics}>
            <header>
                <CommonBlock.Title>Займы</CommonBlock.Title>
            </header>
        </CommonBlock>
    );
};

export default PortfolioLoansStatistics;
