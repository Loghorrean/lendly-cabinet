"use client";

import { PropsWithChildren } from "react";
import MainContent from "../../src/widgets/layout/ui/MainContent";
import { Container } from "@/src/shared/ui/layout";
import styles from "./styles.module.scss";

//TODO: CHECK IF THIS IS APPROPRIATE PLACE FOR CONTAINER
export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <MainContent>
            <Container className={styles.main_container}>{children}</Container>
        </MainContent>
    );
}
