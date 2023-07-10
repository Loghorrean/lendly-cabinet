import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const FolderIcon = ({ size = SVG_CONTAINER_SIZE.SIZE_16, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.7966 3.07098C10.7829 2.96504 10.768 2.85924 10.7518 2.75358L10.7158 2.51876C10.5894 1.69319 9.90593 1.08573 9.10359 1.08573L4.54683 1.08573C4.37783 0.459279 3.82555 0 3.17031 0H1.88386C1.05142 0 0.350249 0.648112 0.250999 1.5093L0.0980293 2.83662C-0.0662593 4.26215 -0.0238592 5.70532 0.223808 7.11772C0.356304 7.87333 0.962792 8.43971 1.69809 8.49453L2.54803 8.55789C4.49365 8.70293 6.44672 8.70293 8.39233 8.55789L9.31181 8.48934C9.76572 8.45551 10.1677 8.21523 10.4265 7.85354C10.771 7.5092 11.0422 7.08863 11.2176 6.61867L11.919 4.73932C12.2186 3.9366 11.6503 3.07098 10.8237 3.07098H10.7966ZM1.88386 0.877423C1.47765 0.877423 1.1355 1.19368 1.08707 1.61392L0.934103 2.94123C0.779881 4.27942 0.819683 5.63416 1.05217 6.96001C1.11562 7.32186 1.40606 7.59309 1.75818 7.61934L1.80646 7.62294L3.11566 4.09889C3.34582 3.47936 3.91781 3.07098 4.55538 3.07098H9.94637C9.93808 3.01123 9.92937 2.95153 9.92023 2.89187L9.88426 2.65706C9.82303 2.2573 9.4921 1.96316 9.10359 1.96316L4.21231 1.96316C3.96137 1.96316 3.75795 1.75119 3.75795 1.48973C3.75795 1.15156 3.49486 0.877423 3.17031 0.877423H1.88386Z"
                    fill="#404043"
                />
            </svg>
        </SvgContainer>
    );
};

export default FolderIcon;
