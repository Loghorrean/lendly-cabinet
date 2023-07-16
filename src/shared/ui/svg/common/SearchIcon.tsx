import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { FC } from "react";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

const SearchIcon: FC<SvgProps> = ({ size, ...props }) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.6643 5.48918C10.6643 7.4162 9.10215 8.97836 7.17513 8.97836C6.21196 8.97836 5.34315 8.59074 4.70969 7.95819C4.07503 7.32443 3.68595 6.45414 3.68595 5.48918C3.68595 3.56216 5.24811 2 7.17513 2C9.10215 2 10.6643 3.56216 10.6643 5.48918ZM12.6643 5.48918C12.6643 8.52077 10.2067 10.9784 7.17513 10.9784C6.04471 10.9784 4.99411 10.6367 4.12096 10.0509L1.48553 12.7047L0.0664062 11.2955L2.68958 8.65397C2.05738 7.75958 1.68595 6.66776 1.68595 5.48918C1.68595 2.45759 4.14354 0 7.17513 0C10.2067 0 12.6643 2.45759 12.6643 5.48918Z"
                    fill="#828282"
                />
            </svg>
        </SvgContainer>
    );
};

export default SearchIcon;
