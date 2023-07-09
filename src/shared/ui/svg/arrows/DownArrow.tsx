import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

const DownArrow = ({ size, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.0861 0.5H10.0607C9.99099 0.5 9.92537 0.53418 9.88435 0.590234L6.00017 5.94414L2.11599 0.590234C2.07498 0.53418 2.00935 0.5 1.93963 0.5H0.914236C0.825368 0.5 0.773415 0.601172 0.825368 0.673633L5.64607 7.31953C5.82107 7.56016 6.17927 7.56016 6.35291 7.31953L11.1736 0.673633C11.2269 0.601172 11.175 0.5 11.0861 0.5Z"
                    fill="#5E2CEC"
                />
            </svg>
        </SvgContainer>
    );
};

export default DownArrow;
