import Header from "@/src/shared/ui/layout/Header";
import styles from "./GuestHeader.module.scss";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { ProjectLink } from "@/src/shared/ui/links";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";

const GuestHeader = () => {
    return (
        <Header>
            <div className={styles.guest_header_links}>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                    <ProjectLink href="/auth/login">Войти</ProjectLink>
                </PrimaryButton>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN}>
                    <ProjectLink href="/auth/register">Регистрация</ProjectLink>
                </PrimaryButton>
            </div>
        </Header>
    );
};

export default GuestHeader;
