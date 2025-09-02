'use client';

import React from 'react';
import ProjectGrid from '@/app/components/ProjectGrid/ProjectGrid';
import { projects } from '@/app/data/projects';

const ProjectsPage: React.FC = () => {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        All Projects
      </h1>
      <ProjectGrid projects={projects} />
    </main>
  );
};

export default ProjectsPage;
