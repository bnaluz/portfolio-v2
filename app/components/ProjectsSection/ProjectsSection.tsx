import Carousel from '../Carousel/Carousel';
import styles from './ProjectsSection.module.scss';
import { Project } from '../../data/projects';

type ProjectsSectionProps = {
  projects: Project[];
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects">
      <div className={styles['section-header']}>
        <h2 className={styles['section-title']}>Projects</h2>
        <a href="/projects" className={styles['section-link']}>
          View All Projects
        </a>
      </div>
      <Carousel projects={projects} />
    </section>
  );
};

export default ProjectsSection;
