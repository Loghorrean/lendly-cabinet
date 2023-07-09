import SvgContainer from "@/src/shared/ui/svg/SvgContainer";
import { PropsWithChildren } from "react";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

type Props = {
    large: boolean;
};

const CountrySvgContainer = ({ large, children }: PropsWithChildren<Props>) => {
    return (
        <SvgContainer size={large ? SVG_CONTAINER_SIZE.SIZE_28 : SVG_CONTAINER_SIZE.SIZE_16}>{children}</SvgContainer>
    );
};

export default CountrySvgContainer;
