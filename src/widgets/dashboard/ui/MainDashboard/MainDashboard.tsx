import styles from "./MainDashboard.module.scss";
import PortfolioDashboard from "@/src/widgets/dashboard/ui/PortfolioDashboard";
import MoneyDashboard from "@/src/widgets/dashboard/ui/MoneyDashboard";
import CalendarDashboard from "@/src/widgets/dashboard/ui/CalendarDashboard";

const MainDashboard = () => {
    return (
        <div className={styles.main_dashboard}>
            <PortfolioDashboard />
            <MoneyDashboard />
            <CalendarDashboard />
        </div>
    );
};

export default MainDashboard;
