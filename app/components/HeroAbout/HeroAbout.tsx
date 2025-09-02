'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import styles from './HeroAbout.module.scss';

const motionOK = () =>
  typeof window !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function HeroAbout() {
  const scope = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!scope.current || !motionOK()) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // ------------------------
      // Typewriter for kicker
      // ------------------------

      const kickerEl = document.querySelector(`.${styles.kicker}`);
      if (kickerEl) {
        const text = kickerEl.textContent || '';
        kickerEl.textContent = '';

        // Wrap each character in a span
        text.split('').forEach((char) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.opacity = '0';
          kickerEl.appendChild(span);
        });

        const chars = kickerEl.querySelectorAll('span');

        // Typewriter animation
        timeline.to(chars, {
          opacity: 1,
          duration: 0.05,
          stagger: 0.02,
          onComplete: () => {
            // Add cursor after typing
            const cursor = document.createElement('span');
            cursor.textContent = '|';
            cursor.className = styles.cursor;
            kickerEl.appendChild(cursor);
          },
        });
      }

      // ------------------------
      // Quick slide/fade for the rest
      // ------------------------
      const quickElements = [
        `.${styles.title}`,
        `.${styles.subtitle}`,
        `.${styles.lead}`,
        `.${styles.actions}`,
        `.${styles.photoWrap}`,
        `.${styles.bio}`,
      ];

      quickElements.forEach((selector) => {
        timeline.fromTo(
          selector,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 },
          '-=0.2'
        );
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className={styles.section} ref={scope}>
      <div className={`container ${styles.grid}`}>
        {/* Left: copy */}
        <div className={styles.copy}>
          <p className={styles.kicker}>Let’s build something impactful</p>

          <h1 className={styles.title}>
            Hi, I’m <span className={styles.highlight}>Bobby</span>
          </h1>
          <h2 className={styles.subtitle}>Full-Stack Developer</h2>

          <p className={styles.lead}>
            I craft responsive, accessible web experiences with a focus on clean
            design and performance. From internal tools to high-visibility
            launches, I bridge design vision and development precision.
          </p>

          <div className={styles.actions}>
            <Link href="/#projects" className={styles.primary}>
              View Projects
            </Link>
            <Link href="/#contact" className={styles.secondary}>
              Contact
            </Link>
          </div>

          {/* Socials */}
          <div className={styles.socials}>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/bobby-naluz-664283197/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={styles.iconBtn}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8 8h3.8v2.05h.05C12.62 8.9 14.1 8 16.2 8c4.1 0 4.85 2.7 4.85 6.2V23h-4v-6.7c0-1.6-.03-3.7-2.25-3.7-2.25 0-2.6 1.75-2.6 3.6V23h-4V8z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/bnaluz"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={styles.iconBtn}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.39-3.87-1.39-.52-1.31-1.27-1.66-1.27-1.66-1.04-.7.08-.68.08-.68 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.17.93-.26 1.93-.39 2.93-.39 1 0 2 .13 2.93.39 2.22-1.48 3.2-1.17 3.2-1.17.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.07 0 4.4-2.7 5.37-5.26 5.65.41.35.78 1.05.78 2.12v3.15c0 .31.2.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:bnaluz9@gmail.com"
              aria-label="Email"
              className={styles.iconBtn}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: photo and bio */}
        <div className={styles.side}>
          <div className={styles.photoWrap}>
            <Image
              src="/bobby-naluz-headshot.jpg"
              alt="Bobby portrait"
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 90vw"
              style={{ objectFit: 'cover' }}
              priority
            />
            <span className={styles.photoRing} aria-hidden="true" />
          </div>

          <div className={styles.bio}>
            <h3 className={styles.bioHeading}>Who I Am</h3>
            <p>
              I got into tech by automating workflows with Excel and VBA, and
              quickly realized I enjoyed building tools that make work easier.
              Since then, I’ve grown into a full-stack developer, building
              scalable solutions and leading projects from internal tools to
              client websites.
            </p>
            <p>
              I’ve built internal tools at{' '}
              <strong>Arnouse Digital Devices</strong>, shipped features at{' '}
              <strong>LegiLink</strong>, and led the rebrand of{' '}
              <strong>My New Red Shoes</strong>’ website to{' '}
              <strong>mboldenchange.org</strong>. Now at{' '}
              <strong>Instrument</strong>, I work on projects for clients like{' '}
              <strong>AlphaSense</strong> and <strong>Amazon (AWS)</strong>,
              making sure the sites are functional, easy to use, and look great.
            </p>
            <p>
              Outside of work, I enjoy tennis, basketball, reading, and video
              games. I drink a lot of coffee, love my cats, and like exploring
              new ideas, whether in code or finding the best local coffee shop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
