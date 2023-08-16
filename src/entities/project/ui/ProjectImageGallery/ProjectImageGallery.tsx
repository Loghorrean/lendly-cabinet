"use client";

import styles from "./ProjectImageGallery.module.scss";
import Slider from "react-slick";
import firstProjectImage from "@/public/images/project/mock-project-pic-1.png";
import secondProjectImage from "@/public/images/project/no-image.png";
import { ProjectImage } from "@/src/shared/ui/images";
import { Button } from "@/src/shared/ui/buttons";
import { cn } from "@/src/shared/utils";
import ArrowLeftTailed from "@/src/shared/ui/svg/arrows/ArrowLeftTailed";
import { useRef } from "react";

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const ProjectImageGallery = () => {
    const slider = useRef(null);
    const handlePrev = () => {
        (slider?.current as any).slickPrev();
    };
    const handleNext = () => {
        (slider?.current as any).slickNext();
    };
    return (
        <section className={styles.project_image_gallery}>
            <p className={styles.project_image_gallery__type}>ID 245367876</p>
            <Slider ref={slider} {...settings}>
                <div className={styles.project_image_gallery__slide}>
                    <ProjectImage src={firstProjectImage} alt="First Project Image" fill />
                </div>
                <div className={styles.project_image_gallery__slide}>
                    <ProjectImage src={secondProjectImage} alt="Second Project Image" fill />
                </div>
            </Slider>
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
        </section>
    );
};

export default ProjectImageGallery;
