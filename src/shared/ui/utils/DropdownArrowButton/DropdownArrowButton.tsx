import React, { ReactElement } from "react";
import styles from "./DropdownArrowButton.module.scss";
import { cn, resultIf } from "@/src/shared/utils";
import DropdownArrow from "@/src/shared/ui/svg/arrows/DropdownArrow";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

interface Props {
    active: boolean;
    ArrowElement?: ReactElement<SvgProps>;
}

const DropdownArrowButton = ({ active, ArrowElement = <DropdownArrow /> }: Props) => {
    return (
        <div className={cn(styles.dropdown_arrow, resultIf(active, styles.dropdown_arrow__active))}>{ArrowElement}</div>
    );
};

export default DropdownArrowButton;
