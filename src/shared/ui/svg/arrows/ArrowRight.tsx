import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ArrowRight = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.63672 1.27782L6.36583 6.00694L1.65036 10.7224"
                    stroke="#363637"
                    strokeWidth="2"
                    strokeLinejoin="bevel"
                />
            </svg>
        </SvgContainer>
    );
};

export default ArrowRight;
