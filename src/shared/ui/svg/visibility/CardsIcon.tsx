import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

type Props = SvgProps & {
    active: boolean;
};

const CardsIcon = ({ active, size, ...props }: Props) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 0.0672607H0V4.12182H4V0.0672607ZM10 0.0672607H6V4.12182H10V0.0672607ZM0 6.01271H4V10.0673H0V6.01271ZM10 6.01271H6V10.0673H10V6.01271Z"
                    fill={active ? "#363637" : "#B2B2B2"}
                />
            </svg>
        </SvgContainer>
    );
};

export default CardsIcon;
