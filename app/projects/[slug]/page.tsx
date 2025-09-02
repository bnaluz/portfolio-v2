import { notFound } from 'next/navigation';
import { projects } from '@/app/data/projects';
import styles from './page.module.scss';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src={project?.image} alt={project?.title} />
          <div className={styles.overlay}></div>
        </div>
        {/* <div className={styles.heroContent}>
          <h1 className={styles.title}>{project?.title}</h1>
          <p className={styles.description}>{project?.description}</p>
        </div> */}
      </section>

      <section className={styles.details}>
        <h2>Technologies Used</h2>
        <ul className={styles.techList}>
          {project?.technologies.map((tech) => (
            <li key={tech} className={styles.techTag}>
              {tech}
            </li>
          ))}
        </ul>

        {project.longDescription && (
          <>
            <h2>About This Project</h2>
            <p>{project.longDescription}</p>
          </>
        )}

        {project?.link && (
          <div>
            <a href={project.link} className={styles.viewMore} target="_blank">
              View Live Project →
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
