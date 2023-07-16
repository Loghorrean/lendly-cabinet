import { ButtonProps, cn } from "@/src/shared/utils";
import { Button } from "@/src/shared/ui/buttons";
import styles from "./LoadMoreButton.module.scss";
import Loader from "@/src/shared/ui/loaders/Loader";
import DropdownArrow from "@/src/shared/ui/svg/arrows/DropdownArrow";

type Props = ButtonProps & {
    loading: boolean;
};

const LoadMoreButton = ({ loading, ...props }: Props) => {
    return (
        <Button {...props} className={cn(styles.load_more_button, props.className)}>
            {loading ? (
                <Loader dark />
            ) : (
                <>
                    <span>Загрузить еще</span>
                    <DropdownArrow />
                </>
            )}
        </Button>
    );
};

export default LoadMoreButton;
