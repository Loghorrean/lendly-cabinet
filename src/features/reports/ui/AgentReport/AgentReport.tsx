import styles from "./AgentReport.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";

const AgentReport = () => {
    return (
        <div className={styles.agent_report}>
            <Heading headingType={HEADING_TYPE.H3} className={styles.agent_report__heading}>
                Отчет агента
            </Heading>
        </div>
    );
};

export default AgentReport;
