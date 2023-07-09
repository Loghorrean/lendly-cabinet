import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ArrowRight = ({ size = SVG_CONTAINER_SIZE.SIZE_24, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.964 7.60637L4.92031 2.10481C4.90191 2.09032 4.87979 2.08131 4.8565 2.07883C4.8332 2.07634 4.80968 2.08048 4.78863 2.09076C4.76758 2.10104 4.74986 2.11704 4.7375 2.13694C4.72514 2.15684 4.71864 2.17982 4.71875 2.20325V3.41106C4.71875 3.48762 4.75469 3.56106 4.81406 3.60793L10.439 8.00012L4.81406 12.3923C4.75313 12.4392 4.71875 12.5126 4.71875 12.5892V13.797C4.71875 13.9017 4.83906 13.9595 4.92031 13.8954L11.964 8.39387C12.0239 8.34717 12.0723 8.28744 12.1057 8.21921C12.139 8.15098 12.1563 8.07605 12.1563 8.00012C12.1563 7.92419 12.139 7.84927 12.1057 7.78104C12.0723 7.71281 12.0239 7.65307 11.964 7.60637Z"
                    fill="#050505"
                    fillOpacity="0.88"
                />
            </svg>
        </SvgContainer>
    );
};

export default ArrowRight;
