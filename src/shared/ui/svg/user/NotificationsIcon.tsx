import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

const NotificationsIcon = ({ size, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.81647 1.6754C3.71376 2.18376 2.16008 3.97706 2.16008 6.11268V9.16698C2.16008 9.44841 1.91675 9.67657 1.61899 9.67657C1.02029 9.67657 0.535156 10.1336 0.535156 10.6947V11.459C0.535156 11.5993 0.655499 11.7129 0.806636 11.7129H13.2637C13.4137 11.7129 13.5352 11.5975 13.5352 11.459V10.6947C13.5352 10.1323 13.0477 9.67657 12.4513 9.67657C12.1525 9.67657 11.9102 9.45019 11.9102 9.16698V6.11268C11.9102 3.97774 10.3569 2.18389 8.25384 1.6754V1.14949C8.25384 0.515266 7.70825 0.00390625 7.03512 0.00390625C6.3633 0.00390625 5.81641 0.516857 5.81641 1.14949L5.81647 1.6754ZM5.13938 12.2221H8.931C8.931 13.2061 8.08217 14.0039 7.03519 14.0039C5.98821 14.0039 5.13938 13.2061 5.13938 12.2221Z"
                    fill="#363637"
                />
            </svg>
        </SvgContainer>
    );
};

export default NotificationsIcon;
