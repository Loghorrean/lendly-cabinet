import styles from "./CommonDocument.module.scss";
import PdfIcon from "@/src/entities/file/ui/PdfIcon";
import { PropsWithChildren } from "react";

type Props = {
    link: string;
};

const CommonDocument = ({ link, children }: PropsWithChildren<Props>) => {
    return (
        <div className={styles.common_document}>
            <a href={link} className={styles.common_document__link}>
                <div className={styles.common_document__icon}>
                    <PdfIcon />
                </div>
                <p className={styles.common_document__text}>{children}</p>
            </a>
        </div>
    );
};

export default CommonDocument;
