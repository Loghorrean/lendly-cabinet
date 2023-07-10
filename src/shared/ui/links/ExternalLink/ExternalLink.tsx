import { AnchorHTMLAttributes } from "react";
import styles from "./ExternalLink.module.scss";
import { useTargetBlank } from "@/src/shared/utils/hooks/useTargetBlank";
import { cn } from "@/src/shared/utils";

export type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const ExternalLink = ({ ...props }: ExternalLinkProps) => {
    return (
        <a {...props} {...useTargetBlank()} className={cn(styles.external_link, props.className)}>
            {props.children}
        </a>
    );
};

export default ExternalLink;
