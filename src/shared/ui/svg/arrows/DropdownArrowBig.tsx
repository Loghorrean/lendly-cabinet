import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const DropdownArrowBig = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.7219 1.63544L5.99282 6.36455L1.27734 1.64908"
                    stroke="#363637"
                    strokeWidth="2"
                    strokeLinejoin="bevel"
                />
            </svg>
        </SvgContainer>
    );
};

export default DropdownArrowBig;
