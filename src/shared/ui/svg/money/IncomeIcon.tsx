import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const IncomeIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_12, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.0205 7.65674H7.85199V9.15674H1.19102L0.441019 8.40674V1.76498L1.94102 1.76498V6.6149L7.71278 0.843144L8.77344 1.9038L3.0205 7.65674Z"
                    fill="#05B768"
                />
            </svg>
        </SvgContainer>
    );
};

export default IncomeIcon;
