import { useState } from "react";
import { cn, resultIf } from "@/src/shared/utils";
import styles from "./CommonFileUpload.module.scss";
import Loader from "@/src/shared/ui/loaders/Loader";
import PdfIcon from "@/src/entities/file/ui/PdfIcon";
import PrivateFileUpload from "@/src/entities/file/ui/PrivateFileUpload";
import { UploadedFile } from "@/src/entities/file/model";

type Props = {
    onError: (error: string) => void;
    onUploaded: (files: Array<UploadedFile>) => void;
};

//TODO: ADD SUCCESS STATE
const CommonFileUpload = ({ onError, onUploaded }: Props) => {
    const [loading, setLoading] = useState(false);
    return (
        <PrivateFileUpload onLoading={setLoading} handleError={onError} onUploaded={onUploaded}>
            <div className={cn(styles.common_file_upload, resultIf(loading, styles.common_file_upload___loading))}>
                {loading ? (
                    <Loader dark />
                ) : (
                    <>
                        <PdfIcon />
                        <p className={styles.common_file_upload__heading}>Добавьте нотариальную доверенность</p>
                        <p className={styles.common_file_upload__types}>
                            jpg, png, jpeg, gif, pdf, tiff, doc, docx, максимум 10Мб
                        </p>
                    </>
                )}
            </div>
        </PrivateFileUpload>
    );
};

export default CommonFileUpload;
