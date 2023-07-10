import ExternalLink from "@/src/shared/ui/links/ExternalLink";
import { ExternalLinkProps } from "@/src/shared/ui/links/ExternalLink/ExternalLink";
import { appConfig } from "@/src/shared/configs";

const PublicLink = ({ href, children, ...props }: ExternalLinkProps) => {
    const publicHref = () => {
        return `${appConfig.publicBaseUrl}${href};`;
    };
    return (
        <ExternalLink {...props} href={publicHref()}>
            {children}
        </ExternalLink>
    );
};

export default PublicLink;
