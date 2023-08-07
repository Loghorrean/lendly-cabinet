import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

type Props = SvgProps & {
    active: boolean;
};

const RowsIcon = ({ active, size, ...props }: Props) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0H12V2.03756H0V0ZM0 4.07512H12V6.11267H0V4.07512ZM12 7.96244H0V10H12V7.96244Z"
                    fill={active ? "#363637" : "#B2B2B2"}
                />
            </svg>
        </SvgContainer>
    );
};

export default RowsIcon;
