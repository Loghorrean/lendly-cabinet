import CountrySvgContainer from "@/src/shared/ui/svg/country/CountrySvgContainer";
import CountrySvg from "@/src/shared/ui/svg/country/CountrySvg";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

const ArmenianFlag = ({ ...props }: SvgProps) => {
    return (
        <CountrySvgContainer large={false}>
            <CountrySvg {...props} large={false} fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1547_8745)">
                    <path d="M0 0H14V3.33333H0V0Z" fill="#D90012" />
                    <path d="M0 3.33301H14V6.66634H0V3.33301Z" fill="#0033A0" />
                    <path d="M0 6.66699H14V10.0003H0V6.66699Z" fill="#F2A800" />
                </g>
                <defs>
                    <clipPath id="clip0_1547_8745">
                        <rect width="14" height="10" rx="1" fill="white" />
                    </clipPath>
                </defs>
            </CountrySvg>
        </CountrySvgContainer>
    );
};

export default ArmenianFlag;
