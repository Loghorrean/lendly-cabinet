import { InputHTMLAttributes, PropsWithChildren, useRef } from "react";
import { useEffectOnUpdate } from "@/src/shared/utils";
import styles from "./PrivateFileUpload.module.scss";
import { useUploadFileMutation } from "@/src/entities/file/hooks";
import { UploadedFile } from "@/src/entities/file/model";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    onLoading: (loading: boolean) => void;
    onError: (text: string) => void;
    onUploaded: (files: Array<UploadedFile>) => void;
};

const PrivateFileUpload = ({ onLoading, onError, onUploaded, children, ...props }: PropsWithChildren<Props>) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { mutateAsync: uploadFileAsync, isLoading } = useUploadFileMutation();
    const handleUpload = async (event: { target: HTMLInputElement }) => {
        const userFiles = (event.target.files as FileList) || [];
        const promises: Array<Promise<unknown>> = [];
        const buffer: Array<UploadedFile> = [];
        for (const file of userFiles) {
            promises.push(
                uploadFileAsync(
                    { file },
                    {
                        onSuccess: result => buffer.push(result),
                        onError: error => {
                            onError(error as string);
                        },
                    }
                )
            );
            Promise.allSettled(promises).then(() => {
                onUploaded(buffer);
            });
        }
    };
    useEffectOnUpdate(() => {
        onLoading(isLoading);
    }, [isLoading]);

    const handleClick = () => {
        inputRef.current?.click();
    };
    return (
        <div className={styles.private_file_upload} onClick={handleClick}>
            <input
                {...props}
                type="file"
                className={styles.private_file_upload__input}
                ref={inputRef}
                onChange={handleUpload}
            />
            {children}
        </div>
    );
};

export default PrivateFileUpload;
