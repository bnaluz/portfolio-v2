'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import ThemeToggle from '../atoms/ThemeToggle/ThemeToggle';
import MobileNav from './MobileNav';
import Image from 'next/image';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={100} height={75} />
        </Link>

        <div className={styles.links}>
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#tech">Tech</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            className={styles.menuButton}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
