"use client";

import styles from "./CurrentBalanceStatitstics.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import { useCurrentProfile } from "@/src/entities/profile/hooks";
import RoundChart from "@/src/shared/ui/charts/RoundChart";
import { Money } from "@/src/shared/ui/utils";
import { useMemo } from "react";
import { cn } from "@/src/shared/utils";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { ProjectLink } from "@/src/shared/ui/links";
import RoundChartEntry from "@/src/shared/ui/charts/RoundChart/composables/RoundChartEntry";

const CurrentBalanceStatistics = () => {
    const { reservedFunds, balance } = useCurrentProfile();
    const totalAmount = (reservedFunds.amount + balance.amount) / 100;
    const getDatasets = useMemo(() => {
        if (totalAmount === 0) {
            return [
                {
                    data: [1],
                    backgroundColor: ["#E4EAE2"],
                    borderWidth: [0],
                },
            ];
        }
        return [
            {
                data: [balance.amount, reservedFunds.amount],
                backgroundColor: ["#28A566", "#E4EAE2"],
                borderWidth: [0, 0],
            },
        ];
    }, [totalAmount]);
    return (
        <CommonBlock className={styles.current_balance_statistics}>
            <header className={styles.current_balance_statistics__header}>
                <CommonBlock.Title>Баланс</CommonBlock.Title>
            </header>
            <div className={styles.current_balance_statistics__chart}>
                <RoundChart data={{ datasets: getDatasets }}>
                    <Money money={{ amount: totalAmount, currencyCode: "RUB" }} />
                </RoundChart>
            </div>
            <footer className={styles.current_balance_statistics__footer}>
                <ul className={styles.current_balance_statistics__list}>
                    <RoundChartEntry label="Всего доступно" className={styles.current_balance_statistics__balance_row}>
                        <Money money={balance} />
                    </RoundChartEntry>
                    <RoundChartEntry label="На удержании" className={styles.current_balance_statistics__reserved_row}>
                        <Money money={reservedFunds} />
                    </RoundChartEntry>
                </ul>
                <div className={styles.current_balance_statistics__actions}>
                    <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                        <ProjectLink href="/withdraw">Вывести</ProjectLink>
                    </PrimaryButton>
                    <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN}>
                        <ProjectLink href="/deposit">Пополнить</ProjectLink>
                    </PrimaryButton>
                </div>
            </footer>
        </CommonBlock>
    );
};

export default CurrentBalanceStatistics;
