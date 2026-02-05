'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../../data/projects';
import styles from './CarouselCard.module.scss';

interface CarouselCardProps {
  project: Project;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`} className={styles['card-link']}>
      <div className={styles['card']}>
        <div className={styles['card-top']}>
          <div className={styles['card-logo-container']}>
            <Image
              src={project.image}
              alt={`${project.title} logo`}
              width={52}
              height={52}
              className={styles['card-logo']}
            />
          </div>
          <h3 className={styles['card-title']}>{project.title}</h3>
        </div>

        <div className={styles['card-content']}>
          <p className={styles['card-description']}>{project.description}</p>

          {project.technologies?.length > 0 && (
            <ul className={styles['card-technologies']}>
              {project.technologies.map((tech) => (
                <li key={tech} className={styles['card-tech-tag']}>
                  {tech}
                </li>
              ))}
            </ul>
          )}

          <div className={styles['card-cta']}>
            View Project <span>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarouselCard;
