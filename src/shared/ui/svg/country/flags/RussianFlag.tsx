import CountrySvgContainer from "@/src/shared/ui/svg/country/CountrySvgContainer";
import CountrySvg from "@/src/shared/ui/svg/country/CountrySvg";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

const RussianFlag = ({ ...props }: SvgProps) => {
    return (
        <CountrySvgContainer large={false}>
            <CountrySvg {...props} large={false} fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2036_12607)">
                    <path
                        d="M0.15 1C0.15 0.530558 0.530558 0.15 1 0.15H13C13.4694 0.15 13.85 0.530558 13.85 1V3.85H0.15V1Z"
                        fill="white"
                        stroke="#0039A6"
                        strokeWidth="0.3"
                    />
                    <path d="M0 3.33301H14V6.66634H0V3.33301Z" fill="#0039A6" />
                    <path d="M0 6.66699H14V10.0003H0V6.66699Z" fill="#D52B1E" />
                </g>
                <defs>
                    <clipPath id="clip0_2036_12607">
                        <rect width="14" height="10" rx="1" fill="white" />
                    </clipPath>
                </defs>
            </CountrySvg>
        </CountrySvgContainer>
    );
};

export default RussianFlag;
