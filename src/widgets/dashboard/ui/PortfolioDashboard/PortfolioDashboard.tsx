import styles from "./PortfolioDashboard.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import AllPortfolioStatistics from "@/src/widgets/statistics/ui/AllPortfolioStatistics";
import PortfolioLoansStatistics from "@/src/widgets/loans/ui/PortfolioLoansStatistics";
import PortfolioProjectsStatistics from "@/src/widgets/projects/ui/PortfolioProjectsStatistics";
import MyInvestmentsDashboardStatistics from "@/src/widgets/investments/ui/MyinvestmentDashboardStatistics";
import RegisterReminder from "@/src/features/auth/RegisterReminder";

const PortfolioDashboard = () => {
    return (
        <div className={styles.portfolio_dashboard}>
            <Heading headingType={HEADING_TYPE.H1} className={styles.portfolio_dashboard__heading}>
                Портфель
            </Heading>
            <div className={styles.portfolio_dashboard__blocks}>
                <div className={styles.portfolio_dashboard__register_reminder}>
                    <RegisterReminder />
                </div>
                <AllPortfolioStatistics />
                <PortfolioLoansStatistics />
                <PortfolioProjectsStatistics />
                <MyInvestmentsDashboardStatistics />
            </div>
        </div>
    );
};

export default PortfolioDashboard;
