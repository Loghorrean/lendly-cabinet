"use client";

import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

type Props = SvgProps & {
    clickable: boolean;
};

const PaginationArrowLeft = ({ size = SVG_CONTAINER_SIZE.SIZE_14, clickable, ...props }: Props) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.90949 5.19273L6.55331 1.54891L5.42194 0.41754L0.397915 5.44156L0.397915 6.57293L5.40745 11.5825L6.53882 10.4511L2.88045 6.79273L11.5876 6.79273L11.5876 5.19273L2.90949 5.19273Z"
                    fill={clickable ? "#363637" : "#4e4e4e"}
                />
            </svg>
        </SvgContainer>
    );
};

export default PaginationArrowLeft;
