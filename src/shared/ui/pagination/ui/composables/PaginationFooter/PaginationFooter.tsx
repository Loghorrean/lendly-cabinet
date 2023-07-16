import styles from "./PaginationFooter.module.scss";
import { PropsWithChildren } from "react";
import { BlockProps, cn } from "@/src/shared/utils";

const PaginationFooter = ({ children, ...props }: PropsWithChildren<BlockProps>) => {
    return (
        <footer {...props} className={cn(styles.pagination_footer, props.className)}>
            {children}
        </footer>
    );
};

export default PaginationFooter;
