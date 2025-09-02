'use client';
import React from 'react';
import { Project } from '@/app/data/projects';
import styles from '@/styles/ProjectPage.module.scss';

interface Props {
  project: Project;
}

const ProjectDetails: React.FC<Props> = ({ project }) => {
  return (
    <section className={styles.content}>
      <h2>Technologies Used</h2>
      <ul className={styles.techList}>
        {project.technologies.map((tech) => (
          <li key={tech} className={styles.techTag}>
            {tech}
          </li>
        ))}
      </ul>

      {project.description && (
        <>
          <h2>About This Project</h2>
          <p>{project.description}</p>
        </>
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Visit Project →
        </a>
      )}
    </section>
  );
};

export default ProjectDetails;
