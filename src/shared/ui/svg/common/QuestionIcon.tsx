import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { FC } from "react";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

const QuestionIcon: FC<SvgProps> = ({ size, fill = "#050505", ...props }) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7 12.8125C3.79063 12.8125 1.1875 10.2094 1.1875 7C1.1875 3.79063 3.79063 1.1875 7 1.1875C10.2094 1.1875 12.8125 3.79063 12.8125 7C12.8125 10.2094 10.2094 12.8125 7 12.8125Z"
                    fill={fill}
                    fillOpacity="0.88"
                />
                <path
                    d="M8.74375 3.94844C8.275 3.5375 7.65625 3.3125 7 3.3125C6.34375 3.3125 5.725 3.53906 5.25625 3.94844C4.76875 4.375 4.5 4.94844 4.5 5.5625V5.68125C4.5 5.75 4.55625 5.80625 4.625 5.80625H5.375C5.44375 5.80625 5.5 5.75 5.5 5.68125V5.5625C5.5 4.87344 6.17344 4.3125 7 4.3125C7.82656 4.3125 8.5 4.87344 8.5 5.5625C8.5 6.04844 8.15625 6.49375 7.62344 6.69844C7.29219 6.825 7.01094 7.04688 6.80938 7.3375C6.60469 7.63437 6.49844 7.99063 6.49844 8.35156V8.6875C6.49844 8.75625 6.55469 8.8125 6.62344 8.8125H7.37344C7.44219 8.8125 7.49844 8.75625 7.49844 8.6875V8.33281C7.49925 8.18113 7.54574 8.03321 7.63187 7.90834C7.71799 7.78347 7.83975 7.68746 7.98125 7.63281C8.90313 7.27813 9.49844 6.46563 9.49844 5.5625C9.5 4.94844 9.23125 4.375 8.74375 3.94844ZM6.375 10.4375C6.375 10.6033 6.44085 10.7622 6.55806 10.8794C6.67527 10.9967 6.83424 11.0625 7 11.0625C7.16576 11.0625 7.32473 10.9967 7.44194 10.8794C7.55915 10.7622 7.625 10.6033 7.625 10.4375C7.625 10.2717 7.55915 10.1128 7.44194 9.99556C7.32473 9.87835 7.16576 9.8125 7 9.8125C6.83424 9.8125 6.67527 9.87835 6.55806 9.99556C6.44085 10.1128 6.375 10.2717 6.375 10.4375Z"
                    fill={fill}
                    fillOpacity="0.88"
                />
            </svg>
        </SvgContainer>
    );
};

export default QuestionIcon;
