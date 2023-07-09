import styles from "./Switch.module.scss";
import { BlockProps, cn } from "@/src/shared/utils";

type Props = BlockProps & {
    active: boolean;
    toggle: () => void;
};

const Switch = ({ active, toggle, ...props }: Props) => {
    return (
        <div
            {...props}
            role="switch"
            aria-checked={active}
            tabIndex={0}
            className={cn(styles.switch, props.className)}
            onClick={toggle}
        >
            <span className={styles.switch__button}></span>
        </div>
    );
};

export default Switch;
