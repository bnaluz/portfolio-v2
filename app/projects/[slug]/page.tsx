import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/app/data/projects';
import styles from './page.module.scss';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className={styles.page}>
      {/* 1. Navigation / Breadcrumb Area */}
      <nav className={styles.breadcrumbNav}>
        <Link href="/#projects" className={styles.backLink}>
          ← Back to Projects
        </Link>
      </nav>

      {/* 2. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLogoWrapper}>
          <Image
            src={project.image}
            alt={project.title}
            width={180}
            height={180}
            className={styles.brandLogo}
            priority
          />
        </div>
      </section>

      {/* 3. Main Content Grid */}
      <div className={styles.layoutGrid}>
        <article className={styles.mainContent}>
          <header className={styles.header}>
            <div className={styles.badge}>Case Study</div>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.lead}>{project.description}</p>
          </header>

          <section className={styles.narrative}>
            <h2>About the Project</h2>
            <div className={styles.longDescription}>
              {/* Handles array-based paragraphs for cleaner readability */}
              {Array.isArray(project.longDescription) ? (
                project.longDescription.map((paragraph, index) => (
                  <p key={index} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>{project.longDescription}</p>
              )}
            </div>
          </section>
        </article>

        {/* 4. Sticky Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarGroup}>
              <h4>Role</h4>
              <p className={styles.roleText}>
                {slug === 'mbolden-change-website'
                  ? 'Lead Engineer'
                  : 'Software Developer'}
              </p>
            </div>

            <div className={styles.sidebarGroup}>
              <h4>Technologies</h4>
              <ul className={styles.techGrid}>
                {project.technologies.map((tech) => (
                  <li key={tech} className={styles.techTag}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener"
                className={styles.liveLink}
              >
                Visit Live Project <span>↗</span>
              </a>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
