import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const OutcomeIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_12, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.9795 2.34326H1.14801V0.843262L7.80898 0.843262L8.55898 1.59326V8.23502H7.05898V3.3851L1.28722 9.15686L0.226562 8.0962L5.9795 2.34326Z"
                    fill="#F47171"
                />
            </svg>
        </SvgContainer>
    );
};

export default OutcomeIcon;
