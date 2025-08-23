'use client';
import React, { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
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
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const onMouseOver = useCallback(() => {
    const autoplay = emblaApi?.plugins().autoplay;
    if (autoplay) {
      autoplay.stop();
    }
  }, [emblaApi]);

  const onMouseLeave = useCallback(() => {
    const autoplay = emblaApi?.plugins().autoplay;
    if (autoplay) {
      autoplay.play();
    }
  }, [emblaApi]);

  return (
    <div className={styles['carousel-full-width-wrapper']}>
      <div
        className={styles.embla}
        ref={emblaRef}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        <div className={styles.embla__container}>
          {projects.map((project) => (
            <div className={styles.embla__slide} key={project.slug}>
              <CarouselCard project={project} />
            </div>
          ))}
        </div>
        <div className={styles.embla__buttons}>
          <button
            className={styles.embla__button}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            &larr;
          </button>
          <button
            className={styles.embla__button}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
