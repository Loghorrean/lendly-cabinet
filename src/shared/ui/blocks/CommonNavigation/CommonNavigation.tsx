import styles from "./CommonNavigation.module.scss";
import { PropsWithChildren, ReactNode } from "react";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import CommonNavigationList from "@/src/shared/ui/blocks/CommonNavigation/composables/CommonNavigationList";
import CommonNavigationLink from "@/src/shared/ui/blocks/CommonNavigation/composables/CommonNavigationLink";

type Props = {
    heading: ReactNode;
};

const CommonNavigation = ({ heading, children }: PropsWithChildren<Props>) => {
    return (
        <div className={styles.common_navigation}>
            <Heading headingType={HEADING_TYPE.H2} className={styles.common_navigation__heading}>
                {heading}
            </Heading>
            {children}
        </div>
    );
};

CommonNavigation.List = CommonNavigationList;
CommonNavigation.Link = CommonNavigationLink;

export default CommonNavigation;
