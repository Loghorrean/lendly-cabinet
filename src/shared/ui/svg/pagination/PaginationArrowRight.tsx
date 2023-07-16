"use client";

import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

type Props = SvgProps & {
    active: boolean;
};

const PaginationArrowRight = ({ size = SVG_CONTAINER_SIZE.SIZE_14, active, ...props }: Props) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.09051 5.19273L5.44669 1.54891L6.57806 0.41754L11.6021 5.44156L11.6021 6.57293L6.59255 11.5825L5.46118 10.4511L9.11955 6.79273L0.412377 6.79273L0.412377 5.19273L9.09051 5.19273Z"
                    fill="#363637"
                />
            </svg>
        </SvgContainer>
    );
};

export default PaginationArrowRight;
