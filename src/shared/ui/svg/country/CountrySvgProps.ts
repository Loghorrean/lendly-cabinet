import { SvgProps } from "@/src/shared/ui/svg/SvgProps";

export type CountrySvgProps = Omit<SvgProps, "size"> & {
    large?: boolean;
};
