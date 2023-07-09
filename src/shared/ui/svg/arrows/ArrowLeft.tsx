import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ArrowLeft = ({ size = SVG_CONTAINER_SIZE.SIZE_24, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.3125 3.41021V2.2024C11.3125 2.09771 11.1922 2.0399 11.111 2.10396L4.06721 7.60553C4.00736 7.65207 3.95894 7.71166 3.92563 7.77977C3.89232 7.84787 3.875 7.92268 3.875 7.9985C3.875 8.07431 3.89232 8.14912 3.92563 8.21722C3.95894 8.28533 4.00736 8.34492 4.06721 8.39146L11.111 13.893C11.1938 13.9571 11.3125 13.8993 11.3125 13.7946V12.5868C11.3125 12.5102 11.2766 12.4368 11.2172 12.3899L5.59221 7.99928L11.2172 3.60709C11.2766 3.56021 11.3125 3.48678 11.3125 3.41021Z"
                    fill="#050505"
                    fillOpacity="0.88"
                />
            </svg>
        </SvgContainer>
    );
};

export default ArrowLeft;
