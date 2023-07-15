import styles from "./PortfolioProjectsStatistics.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";

const PortfolioProjectsStatistics = () => {
    return (
        <CommonBlock className={styles.portfolio_projects_statistics}>
            <CommonBlock.Title>Проекты</CommonBlock.Title>
        </CommonBlock>
    );
};

export default PortfolioProjectsStatistics;
