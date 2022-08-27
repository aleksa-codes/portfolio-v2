import getPosts from '../../lib/getPosts';
import { formatDate } from '../../lib/formatDate';
import PageTransition from '../../components/PageTransition';
import Seo from '../../components/SEO';
import Image from 'next/image';

const title = 'Blog';

const Blog = ({ posts }: { posts: any }) => {
  return (
    <PageTransition>
      <Seo title={title} />
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
          <div className='flex flex-col gap-4 w-full'>
            <a
              className='hover:underline no-underline'
              href={`/blog/${post.slug}`}
            >
              <div className='text-2xl font-bold'>{post.title}</div>
            </a>
            <time className='text-gray-500 text-xs -mt-2 -mb-4 font-semibold'>
              {formatDate(post.date)}
            </time>
            <p className='text-sm text-base-content/70'>{post.desc}</p>
          </div>
        </div>
      ))}
    </PageTransition>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = await getPosts();

  const sortedPosts = posts.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    props: {
      posts: sortedPosts
    }
  };
};
