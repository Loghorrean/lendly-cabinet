import styles from "./CommonDocument.module.scss";
import PdfIcon from "@/src/entities/file/ui/PdfIcon";
import { PropsWithChildren } from "react";
import { useTargetBlank } from "@/src/shared/utils/hooks/useTargetBlank";

type Props = {
    link: string;
};

const CommonDocument = ({ link, children }: PropsWithChildren<Props>) => {
    const blank = useTargetBlank();
    return (
        <div className={styles.common_document}>
            <a href={link} {...blank} className={styles.common_document__link}>
                <div className={styles.common_document__icon}>
                    <PdfIcon />
                </div>
                <p className={styles.common_document__text}>{children}</p>
            </a>
        </div>
    );
};

export default CommonDocument;
