import styles from "./CommonInputContainer.module.scss";
import React, { PropsWithChildren } from "react";
import { BlockProps, cn, resultIf } from "@/src/shared/utils";
import { useCommonInputContext } from "@/src/shared/ui/inputs/CommonInput/context/CommonInputContext";

export type CommonInputContainerProps = PropsWithChildren<BlockProps> & {
    bordered?: boolean;
};

const CommonInputContainer = ({ bordered = true, children, ...props }: CommonInputContainerProps) => {
    const { error } = useCommonInputContext();
    return (
        <div
            {...props}
            className={cn(
                styles.common_input_container,
                resultIf(bordered, styles.common_input_container___bordered),
                resultIf(error, styles.common_input_container___error),
                props.className
            )}
        >
            {children}
        </div>
    );
};

export default React.memo(CommonInputContainer);
