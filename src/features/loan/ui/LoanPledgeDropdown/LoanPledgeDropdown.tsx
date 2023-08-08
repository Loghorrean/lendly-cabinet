import styles from "./LoanPledgeDropdown.module.scss";
import { cn, resultIf, useDropdown, useToggle } from "@/src/shared/utils";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import { PropsWithChildren, ReactNode } from "react";
import ArrowLeft from "@/src/shared/ui/svg/arrows/ArrowLeft";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";

type Props = {
    heading: ReactNode;
    text: ReactNode;
};

const LoanPledgeDropdown = ({ heading, text, children }: PropsWithChildren<Props>) => {
    const [active, toggle] = useToggle();
    const [ref, height] = useDropdown(active);
    return (
        <div className={styles.loan_pledge_dropdown}>
            <header className={styles.loan_pledge_dropdown__main_header} onClick={toggle}>
                <Heading headingType={HEADING_TYPE.H3} className={styles.loan_pledge_dropdown__heading}>
                    {heading}
                </Heading>
                <div className={styles.loan_pledge_dropdown__header}>
                    <p className={styles.loan_pledge_dropdown__text}>{text}</p>
                    <div
                        className={cn(
                            styles.loan_pledge_dropdown__button,
                            resultIf(active, styles.loan_pledge_dropdown__button___active)
                        )}
                    >
                        <ArrowLeft />
                    </div>
                </div>
            </header>
            <div style={{ maxHeight: height }} className={styles.loan_pledge_dropdown__body}>
                <div ref={ref}>
                    <div className={styles.loan_pledge_dropdown__content}>
                        {children}
                        <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE} wide>
                            <Button className={styles.loan_pledge_dropdown__hide} onClick={toggle}>
                                Свернуть
                            </Button>
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanPledgeDropdown;
