import Carousel from './components/Carousel/Carousel';
import HeroAbout from './components/HeroAbout/HeroAbout';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import { projects } from './data/projects';

export default function Home() {
  return (
    <main>
      <HeroAbout />
      {/* Projects anchor – you can replace with your carousel later */}
      <section id="projects">
        <ProjectsSection projects={projects} />
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
