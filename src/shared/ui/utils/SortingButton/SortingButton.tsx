import AsLink from "@/src/shared/ui/buttons/decorators/AsLink";
import { Button } from "@/src/shared/ui/buttons";
import { SORTING_DIRECTION, SortingDirection } from "@/src/shared/models/enums";
import SortingDirectionBlock from "@/src/shared/ui/utils/SortingDirectionBlock";

type Props = {
    direction?: SortingDirection;
    onClick: (direction?: SortingDirection) => void;
};

const SortingButton = ({ direction, onClick }: Props) => {
    const handleClick = () => {
        if (direction === undefined) {
            onClick(SORTING_DIRECTION.ASC);
            return;
        }
        if (direction === SORTING_DIRECTION.ASC) {
            onClick(SORTING_DIRECTION.DESC);
            return;
        }
        onClick(undefined);
    };
    return (
        <AsLink>
            <Button onClick={handleClick}>
                <SortingDirectionBlock direction={direction} />
            </Button>
        </AsLink>
    );
};

export default SortingButton;
