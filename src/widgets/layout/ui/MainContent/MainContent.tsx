"use client";

import Overlay from "@/src/shared/ui/layout/overlay/Overlay";
import { Content, ModalContainer } from "@/src/shared/ui/layout";
import { useOverlay } from "@/src/shared/ui/layout/overlay/Overlay/store";
import Main from "@/src/shared/ui/layout/Main";
import { PropsWithChildren } from "react";
import Footer from "@/src/shared/ui/layout/Footer";
import UserHeader from "@/src/widgets/layout/ui/UserHeader";
import ActionMessageContainer from "@/src/shared/action-messages/ui/ActionMessageContainer";
import { CONTENT_TYPE } from "@/src/shared/ui/layout/Content/Content";

const MainContent = ({ children }: PropsWithChildren) => {
    const { overlayActive } = useOverlay();
    return (
        <>
            <Overlay />
            <Content type={CONTENT_TYPE.NO_FOOTER} aria-hidden={overlayActive}>
                <UserHeader />
                <Main>{children}</Main>
                <Footer />
            </Content>
            <ActionMessageContainer />
            <ModalContainer />
        </>
    );
};

export default MainContent;
