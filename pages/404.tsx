import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './404.module.scss';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, []);

  return (
    <div className={styles.notFound}>
      <h3>Oops, this page cannot be found :(</h3>
      <p>
        Redirecting to <Link href="/">HomePage</Link>
      </p>
    </div>
  );
};

export default NotFound;
