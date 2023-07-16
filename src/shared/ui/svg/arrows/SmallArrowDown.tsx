import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const SmallArrowDown = ({ size = SVG_CONTAINER_SIZE.SIZE_8, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.49917 5.92337L6.78527 3.63728L7.49238 4.34439L4.35236 7.4844H3.64526L0.514298 4.35344L1.2214 3.64634L3.49917 5.92411L3.49917 0.499998L4.49917 0.499998L4.49917 5.92337Z"
                    fill="#828282"
                />
            </svg>
        </SvgContainer>
    );
};

export default SmallArrowDown;
