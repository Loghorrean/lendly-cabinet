import styles from "./MainDashboard.module.scss";
import PortfolioDashboard from "@/src/widgets/dashboard/ui/PortfolioDashboard";
import MoneyDashboard from "@/src/widgets/dashboard/ui/MoneyDashboard";
import CalendarDashboard from "@/src/widgets/dashboard/ui/CalendarDashboard";
import RegisterReminder from "@/src/features/auth/RegisterReminder";

const MainDashboard = () => {
    return (
        <div className={styles.main_dashboard}>
            <RegisterReminder />
            <PortfolioDashboard />
            <MoneyDashboard />
            <CalendarDashboard />
        </div>
    );
};

export default MainDashboard;
