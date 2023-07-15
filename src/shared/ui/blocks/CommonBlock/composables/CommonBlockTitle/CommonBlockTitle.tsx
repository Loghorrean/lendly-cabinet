import styles from "./CommonBlockTitle.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE, HeadingProps } from "@/src/shared/ui/typography/Heading/Heading";
import { cn } from "@/src/shared/utils";

const CommonBlockTitle = ({ ...props }: Omit<HeadingProps, "headingType">) => {
    return (
        <Heading {...props} headingType={HEADING_TYPE.H2} className={cn(styles.common_block_title, props.className)}>
            {props.children}
        </Heading>
    );
};

export default CommonBlockTitle;
