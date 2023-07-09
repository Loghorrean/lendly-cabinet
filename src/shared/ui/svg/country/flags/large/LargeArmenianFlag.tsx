import CountrySvgContainer from "@/src/shared/ui/svg/country/CountrySvgContainer";
import CountrySvg from "@/src/shared/ui/svg/country/CountrySvg";
import { CountrySvgProps } from "@/src/shared/ui/svg/country/CountrySvgProps";

const LargeArmenianFlag = ({ ...props }: CountrySvgProps) => {
    return (
        <CountrySvgContainer large>
            <CountrySvg {...props} large fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1547_52727)">
                    <path d="M0.75 0.25H25.25V6.08333H0.75V0.25Z" fill="#D90012" />
                    <path d="M0.75 6.08301H25.25V11.9163H0.75V6.08301Z" fill="#0033A0" />
                    <path d="M0.75 11.917H25.25V17.7503H0.75V11.917Z" fill="#F2A800" />
                </g>
                <defs>
                    <clipPath id="clip0_1547_52727">
                        <rect x="0.75" y="0.25" width="24.5" height="17.5" rx="1" fill="white" />
                    </clipPath>
                </defs>
            </CountrySvg>
        </CountrySvgContainer>
    );
};

export default LargeArmenianFlag;
