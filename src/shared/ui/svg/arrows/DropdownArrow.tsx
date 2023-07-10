import React from "react";
import SvgContainer from "../SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

const DropdownArrow = ({ size, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.54047 1.22656L4.99364 4.7734L1.45703 1.23679"
                    stroke="#404043"
                    strokeWidth="1.5"
                    strokeLinejoin="bevel"
                />
            </svg>
        </SvgContainer>
    );
};

export default DropdownArrow;
