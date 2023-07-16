import { Children, PropsWithChildren } from "react";
import styles from "./CommonNavigationList.module.scss";
import { BlockProps, cn, resultIf } from "@/src/shared/utils";

type Props = BlockProps & {
    stretch?: boolean;
};

const CommonNavigationList = ({ stretch = true, children, ...props }: PropsWithChildren<Props>) => {
    const mappedChildren = Children.map(children, child => {
        return (
            <li
                className={cn(
                    styles.common_navigation_list__element,
                    resultIf(stretch, styles.common_navigation_list__element___stretched)
                )}
            >
                {child}
            </li>
        );
    });
    return (
        <nav {...props} className={cn(styles.common_navigation_list, props.className)}>
            <ul className={styles.common_navigation_list__list}>{mappedChildren}</ul>
        </nav>
    );
};

export default CommonNavigationList;
