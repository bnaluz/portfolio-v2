'use client';
import Link from 'next/link';
import styles from './MobileNav.module.scss';

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}
        onClick={onClose}
      />
      <aside className={`${styles.panel} ${open ? styles.panelOpen : ''}`}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link href="/#about" onClick={onClose}>
            About
          </Link>
          <Link href="/#projects" onClick={onClose}>
            Projects
          </Link>
          <Link href="/#tech" onClick={onClose}>
            Tech
          </Link>
          <Link href="/#contact" onClick={onClose}>
            Contact
          </Link>
        </nav>
      </aside>
    </>
  );
}
