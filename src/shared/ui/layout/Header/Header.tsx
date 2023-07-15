import styles from "./Header.module.scss";
import { LogoImage } from "@/src/shared/ui/images";
import PublicLink from "@/src/shared/ui/links/PublicLink";
import { PropsWithChildren } from "react";
import { ProjectLink } from "@/src/shared/ui/links";
import { Container } from "@/src/shared/ui/layout";

const Header = ({ children }: PropsWithChildren) => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__container}>
                    <nav className={styles.header__navigation}>
                        <ProjectLink href="/">
                            <LogoImage />
                        </ProjectLink>
                        <ul className={styles.header__list}>
                            <li className={styles.header__element}>
                                <PublicLink href="/about-us" className={styles.header__link}>
                                    О нас
                                </PublicLink>
                            </li>
                            <li className={styles.header__element}>
                                <PublicLink href="/blog" className={styles.header__link}>
                                    Блог
                                </PublicLink>
                            </li>
                            <li className={styles.header__element}>
                                <PublicLink href="/faq" className={styles.header__link}>
                                    FAQ
                                </PublicLink>
                            </li>
                        </ul>
                    </nav>
                    {children}
                </div>
            </Container>
        </header>
    );
};

export default Header;
