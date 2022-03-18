import Link from 'next/link';
import { NextPage } from 'next';
import { ReactNode } from 'react';
import styles from './layout.module.scss';
import { Wave } from '../wave/wave';

interface LayoutProps {
  children: ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.layout}>
      <div className={styles.heroImage}>
        <header className={styles.header}>
          <Link href="/">
            <a>
              <h1>
                <span>Travel</span>
                <span>memories</span>
                <span>Blog</span>
              </h1>
              <h5>or a map where to find me if I never come back</h5>
            </a>
          </Link>
        </header>
      </div>
      <Wave />

      <div className={styles.pageContent}>{children}</div>

      <footer className={styles.footer}>
        <p>Copyright {currentYear} - Joanna&apos;s Travel blog</p>
      </footer>
    </div>
  );
};

export default Layout;
