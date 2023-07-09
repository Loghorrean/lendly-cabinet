import styles from "./CommonTableFooter.module.scss";
import { BlockProps, cn } from "@/src/shared/utils";

const CommonTableFooter = ({ children, ...props }: BlockProps) => {
    return (
        <footer {...props} className={cn(styles.common_table_footer, props.className)}>
            {children}
        </footer>
    );
};

export default CommonTableFooter;
