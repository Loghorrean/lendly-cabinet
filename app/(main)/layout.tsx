"use client";

import { PropsWithChildren } from "react";
import MainContent from "@/src/widgets/layout/MainContent";
import { Container } from "@/src/shared/ui/layout";

//TODO: CHECK IF THIS IS APPROPRIATE PLACE FOR CONTAINER
export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <MainContent>
            <Container>{children}</Container>
        </MainContent>
    );
}
