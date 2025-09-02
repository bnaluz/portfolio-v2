'use client';

import React from 'react';
import { Project } from '../../data/projects';
import styles from './CarouselCard.module.scss';
import Link from 'next/link';

interface CarouselCardProps {
  project: Project;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ project }) => {
  return (
    <div className={styles['carousel-card']}>
      <div className={styles['carousel-card__image-container']}>
        <img
          src={project.image}
          alt={project.title}
          className={styles['carousel-card__image']}
        />
      </div>
      <div className={styles['carousel-card__content']}>
        <h3 className={styles['carousel-card__title']}>{project.title}</h3>
        <p className={styles['carousel-card__description']}>
          {project.description}
        </p>
        {project.technologies?.length > 0 && (
          <ul className={styles['carousel-card__technologies']}>
            {project.technologies.map((tech) => (
              <li key={tech} className={styles['carousel-card__tech-tag']}>
                {tech}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className={styles['carousel-card__view-more']}
        >
          View Project Details &rarr;
        </Link>
      </div>
    </div>
  );
};

export default CarouselCard;
