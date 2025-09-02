'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/app/data/projects';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={project.image} alt={project.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div>
          <Link href={`/projects/${project.slug}`} className={styles.link}>
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
