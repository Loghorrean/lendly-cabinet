import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ArrowRightTailed = ({ size = SVG_CONTAINER_SIZE.SIZE_14, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.5866 5.19276L5.94279 1.54894L7.07416 0.41757L12.0982 5.44159L12.0982 6.57296L7.08865 11.5825L5.95728 10.4511L9.61564 6.79276L0.908471 6.79276L0.908471 5.19276L9.5866 5.19276Z"
                    fill="#363637"
                />
            </svg>
        </SvgContainer>
    );
};

export default ArrowRightTailed;
