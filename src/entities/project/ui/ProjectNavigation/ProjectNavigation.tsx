import styles from "./ProjectNavigation.module.scss";
import { PropsWithChildren } from "react";
import ProjectNavigationElement from "@/src/entities/project/ui/ProjectNavigation/composables/ProjectNavigationElement";

const ProjectNavigation = ({ children }: PropsWithChildren) => {
    return (
        <nav className={styles.project_navigation}>
            <ul className={styles.project_navigation__list} role="tablist">
                {children}
            </ul>
        </nav>
    );
};

ProjectNavigation.Element = ProjectNavigationElement;

export default ProjectNavigation;
