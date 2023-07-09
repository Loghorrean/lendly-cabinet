import { PropsWithChildren } from "react";
import styles from "./RoundProgressBar.module.scss";

type Props = {
    size?: number;
    strokeWidth?: number;
    amount: number;
};

const RoundProgressBar = ({ amount, size = 106, strokeWidth = 6, children }: PropsWithChildren<Props>) => {
    const viewBox = `0 0 ${size} ${size}`;
    const radius = (size - strokeWidth) / 2;
    const dashArray = Math.PI * 2 * radius;
    const dashOffset = dashArray - (dashArray * amount) / 100;
    return (
        <svg
            width={size}
            height={size}
            viewBox={viewBox}
            className={styles.round_progress_bar}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={amount}
        >
            <circle
                className={styles.round_progress_bar__background}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
            />
            <circle
                className={styles.round_progress_bar__progress}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                }}
            />
            {children ?? (
                <text className={styles.round_progress_bar__text} x="50%" y="50%" dy=".3em" textAnchor="middle">
                    {`${amount}%`}
                </text>
            )}
        </svg>
    );
};

export default RoundProgressBar;
