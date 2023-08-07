import styles from "./DetailedProjectMain.module.scss";
import { PropsWithChildren } from "react";

const DetailedProjectMain = ({ children }: PropsWithChildren) => {
    return <div className={styles.detailed_project_main}>{children}</div>;
};

export default DetailedProjectMain;
