"use client";

import styles from "./ActionMessageElement.module.scss";
import { FC, ReactElement, useRef } from "react";
import { useActionMessages } from "@/src/shared/action-messages/store";
import { CSSTransition } from "react-transition-group";
import ErrorIcon from "@/src/shared/ui/svg/action-messages/ErrorMessageIcon";
import {
    ACTION_MESSAGE_TYPE,
    ActionMessage,
    ActionMessageType,
} from "@/src/shared/action-messages/model/ActionMessage";
import { CommonText } from "@/src/shared/ui/typography";
import { Button } from "@/src/shared/ui/buttons";
import AsLink from "@/src/shared/ui/buttons/decorators/AsLink";
import CloseIcon from "@/src/shared/ui/svg/actions/CloseIcon";

interface Props {
    message: ActionMessage;
}

const signsMap = {
    [ACTION_MESSAGE_TYPE.ERROR]: <ErrorIcon />,
} as const satisfies Record<ActionMessageType, ReactElement>;

const ActionMessageElement: FC<Props> = ({ message }) => {
    const { getMessages, removeMessage } = useActionMessages();
    const nodeRef = useRef(null);
    return (
        <CSSTransition
            in={getMessages().filter(currentMessage => message.id === currentMessage.id).length > 0}
            timeout={500}
            classNames={{
                enter: styles.error_element___enter,
                enterActive: styles.error_element___enter_active,
                enterDone: styles.error_element___enter_done,
                exit: styles.error_element___exit,
                exitActive: styles.error_element___exit_active,
                exitDone: styles.error_element___exit_done,
            }}
            nodeRef={nodeRef}
            mountOnEnter
            unmountOnExit
        >
            <li className={styles.error_element} ref={nodeRef}>
                <div className={styles.error_element__inner}>
                    {signsMap[message.type]}
                    <CommonText>{message.description}</CommonText>
                    <AsLink>
                        <Button onClick={() => removeMessage(message.id)} className={styles.error_element__button}>
                            <CloseIcon />
                        </Button>
                    </AsLink>
                </div>
            </li>
        </CSSTransition>
    );
};

export default ActionMessageElement;
