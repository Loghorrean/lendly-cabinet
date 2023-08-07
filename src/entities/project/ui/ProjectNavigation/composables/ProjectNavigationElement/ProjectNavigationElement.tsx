import { BlockProps, cn } from "@/src/shared/utils";
import styles from "./ProjectNavigationElement.module.scss";
import { SyntheticEvent, useEffect, useRef } from "react";
import debounce from "@/src/shared/utils/functions/common/debounce";

type Props = BlockProps<HTMLLIElement> & {
    active: boolean;
    onSelected: () => void;
};

const ProjectNavigationElement = ({ active, onSelected, children, ...props }: Props) => {
    const liRef = useRef<HTMLLIElement | null>(null);
    const recalculate = (isActive: boolean) => {
        if (isActive) {
            const current = liRef.current!;
            const width = current.clientWidth;
            const left = current.offsetLeft;
            const ul = current.parentElement!;
            ul.style.setProperty("--navigation-offset-left", `${left}px`);
            ul.style.setProperty("--navigation-tab-width", `${width - 16}px`);
        }
    };
    useEffect(() => {
        const debouncedRecalculate = debounce(() => recalculate(active));
        window.addEventListener("resize", debouncedRecalculate);
        return () => {
            window.removeEventListener("resize", debouncedRecalculate);
        };
    }, [active]);
    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();
        onSelected();
        recalculate(true);
    };
    return (
        <li
            {...props}
            className={cn(styles.project_navigation_element, props.className)}
            ref={liRef}
            role="presentation"
        >
            <a
                href="#"
                role="tab"
                aria-selected={active}
                onClick={handleClick}
                className={styles.project_navigation_element__link}
            >
                {children}
            </a>
        </li>
    );
};

export default ProjectNavigationElement;
