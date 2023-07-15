import { ProjectLink } from "@/src/shared/ui/links";
import { ProjectLinkProps } from "@/src/shared/ui/links/ProjectLink/ProjectLink";
import styles from "./CommonNavigationLink.module.scss";
import { cn } from "@/src/shared/utils";

const CommonNavigationLink = ({ ...props }: ProjectLinkProps) => {
    return (
        <ProjectLink {...props} className={cn(styles.common_navigation_link, props.className)}>
            {props.children}
        </ProjectLink>
    );
};

export default CommonNavigationLink;
