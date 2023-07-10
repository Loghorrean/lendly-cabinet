import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const LinkArrowRight = ({ size = SVG_CONTAINER_SIZE.SIZE_12, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.39397 4.74307L4.97782 1.32693L6.03848 0.266266L10.7485 4.97629L10.7485 6.03695L6.05207 10.7334L4.99141 9.67272L8.42106 6.24307L0.258153 6.24307L0.258153 4.74307L8.39397 4.74307Z"
                    fill="#05B768"
                />
            </svg>
        </SvgContainer>
    );
};

export default LinkArrowRight;
