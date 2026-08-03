'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Project } from '../../data/projects';
import CarouselCard from '../Carousel/CarouselCard';
import styles from './Carousel.module.scss';

type CarouselProps = {
  projects: Project[];
};

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const resumeAutoScroll = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll && !autoScroll.isPlaying()) {
      autoScroll.play();
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.plugins()?.autoScroll?.stop();
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.plugins()?.autoScroll?.stop();
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.plugins()?.autoScroll?.stop();
      setSelectedIndex(index);
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  return (
    <div
      className={styles['carousel-wrapper']}
      onMouseLeave={resumeAutoScroll}
    >
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

      <div className={styles['controls']}>
        <button
          type="button"
          className={styles['nav-button']}
          onClick={scrollPrev}
          aria-label="Previous project"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div
          className={styles['dots']}
          role="tablist"
          aria-label="Jump to project"
        >
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Go to ${project.title}`}
              className={`${styles['dot']} ${
                index === selectedIndex ? styles['dot--active'] : ''
              }`}
              onClick={() => scrollTo(index)}
            >
              <span className={styles['dot-label']}>{project.title}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className={styles['nav-button']}
          onClick={scrollNext}
          aria-label="Next project"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
