import styles from "./ShowMoreButton.module.scss";
import DropdownArrowBig from "@/src/shared/ui/svg/arrows/DropdownArrowBig";
import { Button } from "@/src/shared/ui/buttons";
import { ButtonProps, cn } from "@/src/shared/utils";

const ShowMoreButton = ({ ...props }: ButtonProps) => {
    return (
        <Button {...props} className={cn(styles.show_more_button, props.className)}>
            Показать больше
            <DropdownArrowBig />
        </Button>
    );
};

export default ShowMoreButton;
