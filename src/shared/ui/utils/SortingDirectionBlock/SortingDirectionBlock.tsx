import { SORTING_DIRECTION, SortingDirection } from "@/src/shared/models/enums";
import SmallArrowUp from "@/src/shared/ui/svg/arrows/SmallArrowUp";
import SmallArrowDown from "@/src/shared/ui/svg/arrows/SmallArrowDown";

type Props = {
    direction?: SortingDirection;
};

const SortingDirectionBlock = ({ direction }: Props) => {
    if (direction === SORTING_DIRECTION.ASC) {
        return <SmallArrowUp />;
    }
    if (direction === SORTING_DIRECTION.DESC) {
        return <SmallArrowDown />;
    }
    return <></>;
};

export default SortingDirectionBlock;
