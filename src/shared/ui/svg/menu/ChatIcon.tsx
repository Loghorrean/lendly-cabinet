import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const ChatIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_24, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.321045" width="14" height="9.78467" rx="2" fill="#363637" />
                <path
                    d="M7.84357 10.0758L4.65375 12.4413C4.09421 12.8562 3.30078 12.4568 3.30078 11.7602V10.0758H7.84357Z"
                    fill="#363637"
                />
                <path
                    d="M3.99219 4.92108L6.25436 7.16229L9.90086 3.29728"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                />
            </svg>
        </SvgContainer>
    );
};

export default ChatIcon;
