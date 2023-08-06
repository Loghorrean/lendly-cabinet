import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const OutcomeIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_12, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.4795 2.34314H1.64801V0.84314L8.30898 0.84314L9.05898 1.59314V8.2349H7.55898V3.38498L1.78722 9.15673L0.726562 8.09607L6.4795 2.34314Z"
                    fill="#F47171"
                />
            </svg>
        </SvgContainer>
    );
};

export default OutcomeIcon;
