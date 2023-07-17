import styles from "./BreadCrumbs.module.scss";
import { ProjectLink } from "@/src/shared/ui/links";
import { cn, resultIf } from "@/src/shared/utils";

type Props = {
    links: Array<{ href: string; text: string }>;
};

const BreadCrumbs = ({ links }: Props) => {
    const renderLinks = () => {
        return links.map((link, index) => {
            const { href, text } = link;
            const isLast = index + 1 === links.length;
            return (
                <>
                    <li>
                        <ProjectLink
                            href={href}
                            className={cn(styles.breadcrumbs__link, resultIf(isLast, styles.breadcrumbs__link___last))}
                        >
                            {text}
                        </ProjectLink>
                    </li>
                    {!isLast && <li className={styles.breadcrumbs__separator}>/</li>}
                </>
            );
        });
    };
    return <ul className={styles.breadcrumbs}>{renderLinks()}</ul>;
};

export default BreadCrumbs;
