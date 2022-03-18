import styles from './wave.module.scss';

export const Wave = () => {
  return (
    <div className={styles.container}>
      <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path d="M0.00,49.99 C207.67,203.79 304.74,-54.76 500.00,49.99 L507.90,159.38 L-9.59,154.45 Z"></path>
      </svg>
    </div>
  );
};
