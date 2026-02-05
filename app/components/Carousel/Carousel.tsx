'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll'; // Import this
import { Project } from '../../data/projects';
import CarouselCard from '../Carousel/CarouselCard';
import styles from './Carousel.module.scss';

type CarouselProps = {
  projects: Project[];
};

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [
      AutoScroll({
        speed: 1, // Higher number = faster
        stopOnInteraction: false,
        stopOnMouseEnter: true, // This handles your hover requirement
      }),
    ],
  );

  return (
    <div className={styles['carousel-wrapper']}>
      <div className={styles['embla']}>
        <div className={styles['embla__viewport']} ref={emblaRef}>
          <div className={styles['embla__container']}>
            {projects.map((project) => (
              <div className={styles['embla__slide']} key={project.slug}>
                <CarouselCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
