import styles from "./IdentificationOverlay.module.scss";
import { PropsWithChildren } from "react";

const IdentificationOverlay = ({ children }: PropsWithChildren) => {
    return <div className={styles.identification_overlay}>{children}</div>;
};

export default IdentificationOverlay;
