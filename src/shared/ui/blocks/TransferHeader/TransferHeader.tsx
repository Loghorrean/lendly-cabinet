import styles from "./TransferHeader.module.scss";
import { PropsWithChildren } from "react";

const TransferHeader = ({ children }: PropsWithChildren) => {
    return <header className={styles.transfer_header}>{children}</header>;
};

export default TransferHeader;
