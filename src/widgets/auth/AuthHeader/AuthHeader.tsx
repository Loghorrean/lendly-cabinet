import styles from "./AuthHeader.module.scss";
import { ProjectLink } from "@/src/shared/ui/links";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { LogoImage } from "@/src/shared/ui/images";

const AuthHeader = () => {
    return (
        <header className={styles.auth_header}>
            <div className={styles.auth_header__container}>
                <ProjectLink aria-label="Main page" href="/">
                    <LogoImage />
                </ProjectLink>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                    <ProjectLink href="/" className={styles.auth_header__link}>
                        <span>Вернуться назад</span>
                    </ProjectLink>
                </PrimaryButton>
            </div>
        </header>
    );
};

export default AuthHeader;
