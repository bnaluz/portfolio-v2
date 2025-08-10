import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      {/* Projects anchor – you can replace with your carousel later */}
      <section
        id="projects"
        style={{ padding: '48px 0' }}
        className="container"
      >
        <h2>Projects</h2>
        <p style={{ color: 'var(--color-muted-ink)' }}>
          Selected work. Carousel coming soon.
        </p>
        {/* WorkGrid or Carousel here */}
      </section>

      {/* About */}
      <section id="about" style={{ padding: '48px 0' }} className="container">
        <h2>About Me</h2>
        <p
          style={{
            maxWidth: 720,
            lineHeight: 1.7,
            color: 'var(--color-muted-ink)',
          }}
        >
          I build fast, clean frontends with Next.js, React, and GSAP. I like
          outdoorsy, earth-tone aesthetics and thoughtful motion.
        </p>
      </section>

      {/* Tech */}
      <section id="tech" style={{ padding: '48px 0' }}>
        {/* If you built TechStack component, render it: */}
        {/* <TechStack /> */}
        {/* Otherwise, a quick placeholder grid: */}
        <div className="container" style={{ display: 'grid', gap: 24 }}>
          <h2>Technologies I Use</h2>
          <div
            style={{
              display: 'grid',
              gap: 24,
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              justifyItems: 'center',
            }}
          >
            {['Next.js', 'React', 'TypeScript', 'SCSS', 'GSAP', 'Vercel'].map(
              (t) => (
                <div
                  key={t}
                  className="card"
                  style={{ padding: 16, textAlign: 'center', width: '100%' }}
                >
                  <div style={{ fontSize: 32 }}>🧩</div>
                  <div>{t}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '48px 0' }} className="container">
        <h2>Contact</h2>
        <p>
          Reach me on{' '}
          <a href="https://linkedin.com/in/your-handle" target="_blank">
            LinkedIn
          </a>{' '}
          or{' '}
          <a href="https://github.com/your-handle" target="_blank">
            GitHub
          </a>
          .
        </p>
        {/* Contact form will go here later */}
      </section>
    </main>
  );
}
