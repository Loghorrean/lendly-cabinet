import styles from "./Container.module.scss";
import { PropsWithChildren } from "react";
import { BlockProps, cn } from "@/src/shared/utils";

const Container = ({ children, ...props }: PropsWithChildren<BlockProps>) => {
    return (
        <div {...props} className={cn(styles.container, props.className)}>
            {children}
        </div>
    );
};

export default Container;
