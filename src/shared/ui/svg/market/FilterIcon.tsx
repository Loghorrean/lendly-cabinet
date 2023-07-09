import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import SvgContainer from "@/src/shared/ui/svg/SvgContainer";

const FilterIcon = ({ size, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.7506 2.40625H2.24752C1.86471 2.40625 1.62565 2.82344 1.81784 3.15625L5.45221 9.33438V13.0938C5.45221 13.3703 5.67409 13.5938 5.94909 13.5938H10.0491C10.3241 13.5938 10.546 13.3703 10.546 13.0938V9.33438L14.1819 3.15625C14.3725 2.82344 14.1335 2.40625 13.7506 2.40625ZM9.42721 12.4688H6.57096V10.0312H9.42877V12.4688H9.42721ZM9.57721 8.77188L9.42877 9.03125H6.5694L6.42096 8.77188L3.32252 3.53125H12.6756L9.57721 8.77188Z"
                    fill="#050505"
                    fillOpacity="0.88"
                />
            </svg>
        </SvgContainer>
    );
};

export default FilterIcon;
