import styles from './skeleton.module.scss';

export default function Skeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.sHeader} />
      <div className={styles.sContent} />
      <div className={styles.sContent} />
      <div className={styles.sContent} />
    </div>
  );
}
