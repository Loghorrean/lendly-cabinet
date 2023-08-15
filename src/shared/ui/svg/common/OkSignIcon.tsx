import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const OkSignIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_32, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="32" height="32" rx="16" fill="#C1F0C6" />
                <path
                    d="M21.5078 13.1953L14.9803 19.8047L10.4922 15.6249"
                    stroke="#404043"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                />
            </svg>
        </SvgContainer>
    );
};

export default OkSignIcon;
