import styles from "./VisibilitySelect.module.scss";
import { Button } from "@/src/shared/ui/buttons";
import { ENTITY_VISIBILITY, EntityVisibility } from "@/src/entities/visibility/model";
import CardsIcon from "@/src/shared/ui/svg/visibility/CardsIcon";
import RowsIcon from "@/src/shared/ui/svg/visibility/RowsIcon";

type Props = {
    visibility: EntityVisibility;
    setVisibility: (visibility: EntityVisibility) => void;
};

const VisibilitySelect = ({ visibility, setVisibility }: Props) => {
    return (
        <div className={styles.visibility_select}>
            <div className={styles.visibility_select__label}>Вид</div>
            <ul className={styles.visibility_select__list}>
                <li>
                    <Button
                        className={styles.visibility_select__element}
                        onClick={() => setVisibility(ENTITY_VISIBILITY.CARDS)}
                    >
                        <CardsIcon active={visibility === ENTITY_VISIBILITY.CARDS} />
                    </Button>
                </li>
                <li>
                    <Button
                        className={styles.visibility_select__element}
                        onClick={() => setVisibility(ENTITY_VISIBILITY.ROWS)}
                    >
                        <RowsIcon active={visibility === ENTITY_VISIBILITY.ROWS} />
                    </Button>
                </li>
            </ul>
        </div>
    );
};

export default VisibilitySelect;
