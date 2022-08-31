import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import getPost from '../../lib/getPost';
import getPosts from '../../lib/getPosts';
import { formatDate } from '../../lib/formatDate';
import { remarkCodeHike } from '@code-hike/mdx';
import { CH } from '@code-hike/mdx/components';
import theme from 'shiki/themes/one-dark-pro.json';
import remarkGfm from 'remark-gfm';
import Seo from '../../components/SEO';
import { useEffect, useState } from 'react';
import { Book } from 'tabler-icons-react';
import Image from 'next/image';
import { GetStaticPaths } from 'next/types';
import PageTransition from '../../components/PageTransition';
import readingTime from 'reading-time';

const ResponsiveImage = (props: any) => (
  <Image
    alt={props.alt}
    src={props.src}
    width={props.width}
    height={props.height}
    layout='responsive'
  />
);

const readTime = (post: any) => {
  const stats = readingTime(post.content);
  // round minutes and return as string
  return `${Math.round(stats.minutes)} min read`;
};

const components = {
  Image
};

function Post({ data, content }: { data: any; content: any }) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  // if not isSSR, render the content
  if (!isSSR) {
    return (
      <PageTransition>
        <Seo title={data.title} description={data.desc} />
        <div className='flex justify-center'>
          <div className='flex flex-col py-6 prose lg:prose-lg min-w-full'>
            {data.img && data.imgWidth && data.imgHeight ? (
              <figure className='flex justify-center'>
                <Image
                  src={data.img}
                  alt={data.title}
                  width={data.imgWidth}
                  height={data.imgHeight}
                  className='rounded bg-base-200'
                />
              </figure>
            ) : (
              data.img && (
                <figure className='flex justify-center'>
                  <Image
                    src={data.img}
                    alt={data.title}
                    className='rounded bg-base-200'
                  />
                </figure>
              )
            )}
            <h1>{data.title}</h1>
            <div className='flex flex-row items-center gap-2 -mt-8 text-lg text-gray-500'>
              <span>
                <time dateTime={data.date}>{formatDate(data.date)}</time>
              </span>
              {data.author && (
                <span className='text-sm text-base-content/70'>
                  By {data.author}
                </span>
              )}
              <span>•</span>

              <span>
                <div>{readTime(data)}</div>
              </span>
              <span>
                <Book size={24} strokeWidth={1.5} />
              </span>
            </div>
            <div>
              <MDXRemote {...content} components={{ ...components, CH }} />
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }
  return null;
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug }
  }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({
  params
}: {
  params: { slug: string };
}) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [
        [remarkCodeHike, { autoImport: false, theme, showCopyButton: true }],
        remarkGfm
      ],
      useDynamicImport: true
    }
  });
  return {
    props: {
      data: post,
      content: mdxSource
    }
  };
};
