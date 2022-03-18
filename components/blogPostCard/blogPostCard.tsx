import { BlogPost } from '../../types/blogposts.types';
import Link from 'next/link';
import Image from 'next/image';
import styles from './blogPostCard.module.scss';

interface BlogPostCardProps {
  blogPost: BlogPost;
}

export const BlogPostCard = ({ blogPost }: BlogPostCardProps) => {
  const { title, slug, thumbnail, shortDescription } = blogPost;

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h4>{title}</h4>
        <p>{shortDescription}</p>
        <div className={styles.actions}>
          <Link href={`/blogposts/${slug}`}>
            <a>Read more &rarr;</a>
          </Link>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          objectFit="cover"
          alt="View from the described place"
          src={`https:${thumbnail.fields.file.url}`}
          layout="fill"
        />
      </div>
    </div>
  );
};
