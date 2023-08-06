import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const IncomeIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_12, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5205 7.65686H8.35199V9.15686H1.69102L0.941019 8.40686V1.7651L2.44102 1.7651V6.61502L8.21278 0.843266L9.27344 1.90393L3.5205 7.65686Z"
                    fill="#05B768"
                />
            </svg>
        </SvgContainer>
    );
};

export default IncomeIcon;
