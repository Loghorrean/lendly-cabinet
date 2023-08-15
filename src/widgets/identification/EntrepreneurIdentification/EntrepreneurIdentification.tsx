import styles from "./EntrepreneurIdentification.module.scss";
import { SyntheticEvent, useState } from "react";
import PrimaryButton, { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import { useActionMessages } from "@/src/shared/action-messages/store";
import { useCurrentProfile } from "@/src/entities/profile/hooks";
import { useCreateEntrepreneurIdentification } from "@/src/entities/identification/hooks";
import { createDefaultPassport, createDefaultPerson } from "@/src/features/identification/model";
import { isValueEmpty } from "@/src/shared/utils";
import { ACTION_MESSAGE_TYPE } from "@/src/shared/action-messages/model/ActionMessage";
import IdentificationPersonal from "@/src/features/identification/ui/IdentificationPersonal";
import IdentificationPassport from "@/src/features/identification/ui/IdentificationPassport";
import CommonInputBlock from "@/src/shared/ui/inputs/CommonInputBlock";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import IdentificationPassportFiles from "@/src/features/identification/ui/IdentificationPassportFiles";
import IdentificationPhone from "@/src/features/identification/ui/IdentificationPhone";
import IdentificationOverlay from "@/src/features/identification/ui/IdentificationOverlay";
import Loader from "@/src/shared/ui/loaders/Loader";
import IdentificationCompletedNotification from "@/src/features/identification/ui/IdentificationCompletedNotification";
import { IdentificationAgreements as IdentificationAgreementsModel } from "@/src/entities/identification/model/composables";
import IdentificationAgreements from "@/src/features/identification/ui/IdentificationAgreements";

const EntrepreneurIdentification = () => {
    const { addMessage, addMessagesBulk } = useActionMessages();
    const [overlayOpened, setOverlayOpened] = useState(false);
    const profile = useCurrentProfile();
    const createEntrepreneurIdentification = useCreateEntrepreneurIdentification();
    const [person, setPerson] = useState(createDefaultPerson());
    const [passport, setPassport] = useState(createDefaultPassport());
    const [inn, setInn] = useState("");
    const [ogrnip, setOgrnip] = useState("");
    const [registrationAddress, setRegistrationAddress] = useState("");
    const [agreements, setAgreements] = useState<IdentificationAgreementsModel>({
        personalDataPolicy: false,
        userContractTerms: false,
    });
    const setFirstPage = (fileUrl: string) => {
        setPassport(prev => {
            return {
                ...prev,
                scanCopies: [fileUrl, prev.scanCopies[1]],
            };
        });
    };
    const setSecondPage = (fileUrl: string) => {
        setPassport(prev => {
            return {
                ...prev,
                scanCopies: [prev.scanCopies[0], fileUrl],
            };
        });
    };

    //TODO: ADD VALIDATION
    const validateForm = () => {
        const errors: Array<string> = [];
        if (isValueEmpty(profile.phone)) {
            errors.push("Телефон не указан!");
        }
        if (!agreements.userContractTerms || !agreements.personalDataPolicy) {
            errors.push("Неверно указаны соглашения!");
        }
        return errors;
    };

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const errors = validateForm();
        if (errors.length !== 0) {
            addMessagesBulk(ACTION_MESSAGE_TYPE.ERROR, errors);
            return;
        }
        setOverlayOpened(true);
        await createEntrepreneurIdentification.mutateAsync(
            {
                person,
                passport,
                phone: profile.phone!,
                registerAddress: registrationAddress,
                inn,
                ogrnip,
                agreements: {
                    personalDataPolicy: true,
                    userContractTerms: true,
                },
            },
            {
                onSuccess: () => {
                    addMessage(ACTION_MESSAGE_TYPE.SUCCESS, "Заявка отправлена!");
                },
            }
        );
    };
    return (
        <form onSubmit={handleSubmit} className={styles.entrepreneur_identification}>
            <IdentificationPersonal person={person} setPerson={setPerson} />
            <IdentificationPassport passport={passport} setPassport={setPassport} inn={inn} setInn={setInn} />
            <CommonInputBlock>
                <CommonInputBlock>
                    <CommonLabel htmlFor="registration-address">Адрес регистрации</CommonLabel>
                    <CommonInput
                        id="registration-address"
                        value={registrationAddress}
                        onChange={setRegistrationAddress}
                    >
                        <CommonInput.Container>
                            <CommonInput.Input />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
                <CommonInputBlock>
                    <CommonLabel htmlFor="ogrnip">ОГРНИП</CommonLabel>
                    <CommonInput id="ogrnip" value={ogrnip} onChange={setOgrnip}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="000000000000000" mask="999999999999999" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
            </CommonInputBlock>
            <IdentificationPassportFiles
                firstPage={passport.scanCopies[0]}
                setFirstPage={setFirstPage}
                secondPage={passport.scanCopies[1]}
                setSecondPage={setSecondPage}
            />
            <IdentificationPhone />
            <IdentificationAgreements agreements={agreements} setAgreements={setAgreements} />
            <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN}>
                <Button type="submit" className={styles.entrepreneur_identification__submit}>
                    Подать заявку
                </Button>
            </PrimaryButton>
            {overlayOpened && (
                <IdentificationOverlay>
                    {createEntrepreneurIdentification.isLoading ? (
                        <Loader green />
                    ) : (
                        <IdentificationCompletedNotification onClick={() => setOverlayOpened(false)} />
                    )}
                </IdentificationOverlay>
            )}
        </form>
    );
};

export default EntrepreneurIdentification;
