import { SvgProps } from "@/src/shared/ui/svg/SvgProps";
import { PropsWithChildren } from "react";

type Props = Omit<SvgProps, "size"> & {
    large: boolean;
};

const CountrySvg = ({ large, children, ...props }: PropsWithChildren<Props>) => {
    const dimensions = large
        ? {
              width: 26,
              height: 18,
              viewBox: "0 0 26 18",
          }
        : {
              width: 14,
              height: 10,
              viewBox: "0 0 14 10",
          };
    return (
        <svg {...props} {...dimensions}>
            {children}
        </svg>
    );
};

export default CountrySvg;
