import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const SmallLockIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_10, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.25056 0C3.67913 0 2.39342 1.28571 2.39342 2.85714V4.28571H2.21484C1.52449 4.28571 0.964844 4.84536 0.964844 5.53571V8.75C0.964844 9.44035 1.52449 10 2.21484 10H8.28627C8.97663 10 9.53627 9.44036 9.53627 8.75V5.53572C9.53627 4.84536 8.97663 4.28571 8.28627 4.28571H8.1077V2.85714C8.1077 1.28571 6.82199 0 5.25056 0ZM5.25056 1.42857C6.05056 1.42857 6.67913 2.05714 6.67913 2.85714V4.28571H3.82199V2.85714C3.82199 2.05714 4.45056 1.42857 5.25056 1.42857Z"
                    fill="#828282"
                />
            </svg>
        </SvgContainer>
    );
};

export default SmallLockIcon;
