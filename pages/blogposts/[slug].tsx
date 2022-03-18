import { GetStaticPaths, GetStaticProps } from 'next';
import { Entry, EntryCollection } from 'contentful';
import { BlogPost } from '../../types/blogposts.types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { client } from '../../api/client';
import Skeleton from '../../components/skeleton/skeleton';
import styles from './blogPostDetails.module.scss';

export const getStaticPaths: GetStaticPaths = async () => {
  const res: EntryCollection<BlogPost> = await client.getEntries({ content_type: 'blogPost' });
  const paths = res.items.map((item) => {
    return { params: { slug: item.fields.slug } };
  });

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const res: EntryCollection<BlogPost> = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params?.slug
  });
  const blogPost: Entry<BlogPost> = res.items[0];

  if (!res.items || res.items.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {
      blogPost
    },
    revalidate: 10
  };
};

interface BlogPostDetailsProps {
  blogPost: Entry<BlogPost>;
}

const BlogPostDetails = ({ blogPost }: BlogPostDetailsProps) => {
  if (!blogPost) {
    return <Skeleton />;
  }

  const { title, description } = blogPost.fields;

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{documentToReactComponents(description)}</div>
    </>
  );
};

export default BlogPostDetails;
