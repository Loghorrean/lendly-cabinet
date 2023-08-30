"use client";

import styles from "./ProjectImageGallery.module.scss";
import Slider from "react-slick";
import noImagePlaceholder from "@/public/images/project/no-image.png";
import { ProjectImage } from "@/src/shared/ui/images";
import { Button } from "@/src/shared/ui/buttons";
import { cn } from "@/src/shared/utils";
import ArrowLeftTailed from "@/src/shared/ui/svg/arrows/ArrowLeftTailed";
import { useMemo, useRef } from "react";

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

type Props = {
    photoUrls: Array<string>;
};

const ProjectImageGallery = ({ photoUrls }: Props) => {
    const slider = useRef(null);
    const handlePrev = () => {
        (slider?.current as any).slickPrev();
    };
    const handleNext = () => {
        (slider?.current as any).slickNext();
    };
    const renderPhotos = useMemo(() => {
        if (photoUrls.length === 0) {
            return (
                <div className={styles.project_image_gallery__slide}>
                    <ProjectImage src={noImagePlaceholder} alt="No Image Placeholder" fill />
                </div>
            );
        }
        return (
            <Slider ref={slider} {...settings}>
                {photoUrls.map(url => {
                    return (
                        <div key={url} className={styles.project_image_gallery__slide}>
                            <ProjectImage src={url} alt="Project Image" fill />
                        </div>
                    );
                })}
            </Slider>
        );
    }, [photoUrls]);
    return (
        <section className={styles.project_image_gallery}>
            <p className={styles.project_image_gallery__type}>ID 245367876</p>
            {renderPhotos}
            {photoUrls.length !== 0 && (
                <>
                    <Button
                        className={cn(styles.project_image_gallery__arrow, styles.project_image_gallery__arrow___left)}
                        onClick={handlePrev}
                    >
                        <ArrowLeftTailed />
                    </Button>
                    <Button
                        className={cn(styles.project_image_gallery__arrow, styles.project_image_gallery__arrow___right)}
                        onClick={handleNext}
                    >
                        <ArrowLeftTailed />
                    </Button>
                </>
            )}
        </section>
    );
};

export default ProjectImageGallery;
