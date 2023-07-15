import { Children, PropsWithChildren } from "react";
import styles from "./CommonNavigationList.module.scss";

const CommonNavigationList = ({ children }: PropsWithChildren) => {
    const mappedChildren = Children.map(children, child => {
        return <li className={styles.common_navigation_list__element}>{child}</li>;
    });
    return (
        <nav className={styles.common_navigation_list}>
            <ul className={styles.common_navigation_list__list}>{mappedChildren}</ul>
        </nav>
    );
};

export default CommonNavigationList;
