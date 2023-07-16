import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const SmallArrowUp = ({ size = SVG_CONTAINER_SIZE.SIZE_8, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.49917 1.91464L6.78527 4.20073L7.49238 3.49363L4.35236 0.353614H3.64526L0.514298 3.48457L1.22141 4.19168L3.49917 1.91391L3.49917 7.33801L4.49917 7.33801L4.49917 1.91464Z"
                    fill="#828282"
                />
            </svg>
        </SvgContainer>
    );
};

export default SmallArrowUp;
