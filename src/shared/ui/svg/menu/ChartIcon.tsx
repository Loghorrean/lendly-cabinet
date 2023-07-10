import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ChartIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.59255 0.778055C5.59255 0.712435 5.53633 0.660645 5.47104 0.667237C2.77348 0.939633 0.667969 3.21725 0.667969 5.98664C0.667969 8.93954 3.06176 11.3333 6.01466 11.3333C7.49863 11.3333 8.8415 10.7285 9.80991 9.75268C9.85618 9.70607 9.85107 9.62992 9.79999 9.58864L5.74934 6.31493C5.65018 6.23479 5.59255 6.11413 5.59255 5.98664V0.778055Z"
                    fill="#404043"
                />
                <path
                    d="M10.3311 8.93242C10.3821 8.97367 10.4576 8.96275 10.4935 8.90781C10.9489 8.21098 11.2461 7.40123 11.3341 6.52999C11.3407 6.4647 11.2888 6.40875 11.2232 6.40875H7.52683C7.42071 6.40875 7.37354 6.54215 7.45608 6.60885L10.3311 8.93242Z"
                    fill="#404043"
                />
                <path
                    d="M11.2232 5.56453C11.2889 5.56453 11.3407 5.50834 11.3341 5.44305C11.0797 2.92421 9.07708 0.921569 6.55825 0.667234C6.49296 0.660642 6.43677 0.712435 6.43677 0.778056V5.39569C6.43677 5.48894 6.51236 5.56453 6.60561 5.56453H11.2232Z"
                    fill="#404043"
                />
            </svg>
        </SvgContainer>
    );
};

export default ChartIcon;
