import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ArrowLeftTailed = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.4134 5.19276L7.05721 1.54894L5.92584 0.41757L0.901821 5.44159L0.901821 6.57296L5.91135 11.5825L7.04272 10.4511L3.38436 6.79276L12.0915 6.79276L12.0915 5.19276L3.4134 5.19276Z"
                    fill="#363637"
                />
            </svg>
        </SvgContainer>
    );
};

export default ArrowLeftTailed;
