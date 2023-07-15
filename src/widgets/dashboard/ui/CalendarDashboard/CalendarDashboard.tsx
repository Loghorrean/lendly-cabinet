import styles from "./CalendarDashboard.module.scss";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import { Heading } from "@/src/shared/ui/typography";
import RepaymentsDateBlock from "@/src/widgets/repayments/ui/RepaymentsDateBlock";

const CalendarDashboard = () => {
    return (
        <div className={styles.calendar_dashboard}>
            <Heading headingType={HEADING_TYPE.H1} className={styles.calendar_dashboard__heading}>
                Календарь выплат
            </Heading>
            <RepaymentsDateBlock />
        </div>
    );
};

export default CalendarDashboard;
