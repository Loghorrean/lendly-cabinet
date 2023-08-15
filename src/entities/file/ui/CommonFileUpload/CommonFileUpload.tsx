import { useState } from "react";
import { cn, isValueEmpty, resultIf } from "@/src/shared/utils";
import styles from "./CommonFileUpload.module.scss";
import Loader from "@/src/shared/ui/loaders/Loader";
import PdfIcon from "@/src/entities/file/ui/PdfIcon";
import PrivateFileUpload from "@/src/entities/file/ui/PrivateFileUpload";
import { UploadedFile } from "@/src/entities/file/model";
import OkSignIcon from "@/src/shared/ui/svg/common/OkSignIcon";

type Props = {
    fileUrl?: string;
    placeholder: string;
    onError: (error: string) => void;
    onUploaded: (files: Array<UploadedFile>) => void;
};

//TODO: ADD SUCCESS STATE
//TODO: ADD TYPES AND FILE SIZE
const CommonFileUpload = ({ fileUrl, placeholder, onError, onUploaded }: Props) => {
    const [loading, setLoading] = useState(false);
    return (
        <PrivateFileUpload onLoading={setLoading} handleError={onError} onUploaded={onUploaded}>
            <div className={cn(styles.common_file_upload, resultIf(loading, styles.common_file_upload___loading))}>
                {loading ? (
                    <Loader dark />
                ) : (
                    <>
                        <PdfIcon />
                        <p className={styles.common_file_upload__heading}>{fileUrl ?? placeholder}</p>
                        {isValueEmpty(fileUrl) ? (
                            <p className={styles.common_file_upload__types}>
                                jpg, png, jpeg, gif, pdf, tiff, doc, docx, максимум 10Мб
                            </p>
                        ) : (
                            <OkSignIcon />
                        )}
                    </>
                )}
            </div>
        </PrivateFileUpload>
    );
};

export default CommonFileUpload;
