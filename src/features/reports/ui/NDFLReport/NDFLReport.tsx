import styles from "./NDFLReport.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";

const NDFLReport = () => {
    return (
        <div className={styles.ndfl_report}>
            <Heading headingType={HEADING_TYPE.H3} className={styles.ndfl_report__heading}>
                Отчет НДФЛ
            </Heading>
        </div>
    );
};

export default NDFLReport;
