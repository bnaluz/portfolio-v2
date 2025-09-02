import Carousel from './components/Carousel/Carousel';
import Contact from './components/Contact/Contact';
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
      <section id="contact" className="container">
        <Contact />
      </section>
    </main>
  );
}
