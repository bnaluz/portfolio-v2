'use client';
import { useTheme } from '../../providers/ThemeProvider';
import styles from './ThemeToggle.module.scss';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      aria-pressed={theme === 'dark'}
      className={styles.toggle}
    >
      <span className={styles.icon}>{theme === 'light' ? '🌙' : '☀️'}</span>
      <span className={styles.label}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
