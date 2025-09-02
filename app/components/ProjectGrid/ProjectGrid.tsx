'use client';

import React from 'react';
import { Project } from '@/app/data/projects';
import ProjectCard from '../ProjectGrid/ProjectCard';
import styles from './ProjectGrid.module.scss';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
