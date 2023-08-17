import styles from "./SecondaryMarketCard.module.scss";
import { SellingOffer } from "@/src/entities/offer/model";
import noImagePicture from "@/public/images/project/no-image.png";
import RoundProgressBar from "@/src/shared/ui/utils/RoundProgressBar";
import { ProjectImage } from "@/src/shared/ui/images";

type Props = {
    offer: SellingOffer;
};

const SecondaryMarketCard = ({ offer }: Props) => {
    return (
        <li className={styles.secondary_market_card}>
            <div className={styles.secondary_market_card__image_container}>
                <div className={styles.primary_market_card__ltv}>
                    <RoundProgressBar amount={64}>
                        <text
                            className={styles.primary_market_card__percent}
                            x="50%"
                            y="50%"
                            dy="-0.1em"
                            textAnchor="middle"
                        >
                            64%
                        </text>
                        <text
                            className={styles.primary_market_card__percent_text}
                            x="50%"
                            y="50%"
                            dy="1.25em"
                            textAnchor="middle"
                        >
                            LTV
                        </text>
                    </RoundProgressBar>
                </div>
                <ProjectImage src={noImagePicture} alt="No image found" fill />
            </div>
        </li>
    );
};

export default SecondaryMarketCard;
