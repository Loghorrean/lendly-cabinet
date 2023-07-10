import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

const LightningIcon = ({ size, ...props }: SvgProps) => {
    return (
        <SvgContainer size={size}>
            <svg {...props} width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.8819 0.947373C4.8819 0.83484 4.8192 0.733185 4.72259 0.689104C4.62599 0.645022 4.51416 0.667037 4.43847 0.745034L3.50716 1.70479C2.12052 3.13379 0.948849 4.78443 0.0338412 6.59797C0.0122979 6.63874 0 6.68587 0 6.73608C0 6.8911 0.117259 7.01678 0.261905 7.01678H2.51952V11.0526C2.51952 11.1638 2.58073 11.2645 2.67559 11.3094C2.77046 11.3543 2.88113 11.335 2.9578 11.2601L3.3745 10.8533C4.83316 9.42921 6.07104 7.76537 7.0417 5.92422L7.29945 5.43532C7.34527 5.34841 7.34458 5.24196 7.29763 5.15575C7.25069 5.06954 7.16456 5.01653 7.07143 5.01653H4.8819V0.947373Z"
                    fill="#363637"
                />
            </svg>
        </SvgContainer>
    );
};

export default LightningIcon;
