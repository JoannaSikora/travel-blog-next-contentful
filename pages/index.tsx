import { GetStaticProps, NextPage } from 'next';
import { EntryCollection } from 'contentful';
import { BlogPost, BlogPostsList } from '../types/blogposts.types';
import { BlogPostCard } from '../components/blogPostCard/blogPostCard';
import { client } from '../api/client';

interface BlogPostsProps {
  blogPosts: BlogPostsList;
}

export const getStaticProps: GetStaticProps = async () => {
  const res: EntryCollection<BlogPost> = await client.getEntries({ content_type: 'blogPost' });
  const blogPosts: BlogPostsList = res.items;

  return {
    props: {
      blogPosts
    }
  };
};

const BlogPosts: NextPage<BlogPostsProps> = ({ blogPosts }) => {
  return (
    <div className="recipe-list">
      <h1>Latest posts:</h1>
      <ul>
        {blogPosts.map(({ fields: post }) => (
          <BlogPostCard key={post.slug} blogPost={post} />
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
