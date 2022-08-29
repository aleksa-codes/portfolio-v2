import getPosts from '../../lib/getPosts';
import getPost from '../../lib/getPost';
import { formatDate } from '../../lib/formatDate';
import PageTransition from '../../components/PageTransition';
import readingTime from 'reading-time';
import { Book } from 'tabler-icons-react';
import Seo from '../../components/SEO';
import Image from 'next/image';

const title = 'Blog';

const readTime = (post: any) => {
  const stats = readingTime(post.content);
  // round minutes and return as string
  return `${Math.round(stats.minutes)} min`;
};

const Blog = ({ posts }: { posts: any }) => {
  return (
    <PageTransition>
      <Seo title={title} />
      <div className='pb-8'>
        <h1>Blog</h1>
        {posts.map((post: any) => (
          <div
            key={post.slug}
            className='py-4 flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-center md:items-start'
          >
            <a
              href={`/blog/${post.slug}`}
              className='shrink-0 hover:-translate-y-1 transition-transform duration-200 ease-in-out'
            >
              <Image
                src={post.img}
                alt={title}
                width={160}
                height={160}
                className='w-20 h-20 md:w-40 md:h-40 rounded bg-base-200 object-cover'
              />
            </a>
            <div className='flex flex-col w-full'>
              <a
                className='hover:underline no-underline'
                href={`/blog/${post.slug}`}
              >
                <div className='text-2xl font-bold'>{post.title}</div>
              </a>
              <div className='flex flex-row items-center gap-1 text-sm text-gray-500 font-semibold'>
                <time>{formatDate(post.date)}</time>
                <span>•</span>
                <span>{readTime(post)}</span>
                <Book size={16} strokeWidth={2.5} />
              </div>

              <p className='text-sm text-base-content/70'>{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </PageTransition>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = await getPosts();

  const sortedPosts = posts.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const getPostPromises = sortedPosts.map((post: any) => getPost(post.slug));

  const postsWithContent = await Promise.all(getPostPromises);

  return {
    props: {
      posts: postsWithContent
    }
  };
};
