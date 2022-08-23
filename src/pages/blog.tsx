import PageTransition from '../components/PageTransition';
import Seo from '../components/SEO';
import Image from 'next/image';

const title = 'Blog';

const blogPosts = [
  {
    title: `I baught a chair and here's how I did it`,
    desc: 'Laudantium iste repellat et. Et officiis corporis. At est placeat voluptas aut. Soluta dolor quae quae tempora. Voluptatibus quibusdam natus. Facilis ea repellendus expedita voluptatum rerum autem.',
    img: 'https://picsum.photos/400/400?random=1',
    date: '2020-01-01',
    slug: 'blog-post-1'
  },
  {
    title: 'Top 10 furniture design trends for 2022',
    desc: 'Laudantium iste repellat et. Et officiis corporis. At est placeat voluptas aut. Soluta dolor quae quae tempora. Voluptatibus quibusdam natus. Facilis ea repellendus expedita voluptatum rerum autem.',
    img: 'https://picsum.photos/400/400?random=2',
    date: '2020-01-02',
    slug: 'blog-post-2'
  },
  {
    title: 'How to build a modern home',
    desc: 'Laudantium iste repellat et. Et officiis corporis. At est placeat voluptas aut. Soluta dolor quae quae tempora.',
    img: 'https://picsum.photos/400/400?random=3',
    date: '2020-01-03',
    slug: 'blog-post-3'
  },
  {
    title: 'Build a budget gaming PC in 2022',
    desc: 'Laudantium iste repellat et. Et officiis corporis. At est placeat voluptas aut. Soluta dolor quae quae tempora. Voluptatibus quibusdam natus. Facilis ea repellendus expedita voluptatum rerum autem.',
    img: 'https://picsum.photos/400/400?random=4',
    date: '2020-01-04',
    slug: 'blog-post-4'
  }
];

const Blog = () => {
  return (
    <PageTransition>
      <Seo title={title} />
      {blogPosts.map(({ title, desc, img, slug }) => (
        <div
          key={slug}
          className='py-6 flex flex-row-reverse gap-6 md:gap-10 items-center md:items-start'
        >
          <a href={`/blog/${slug}`} className='shrink-0'>
            <Image
              src={img}
              alt={title}
              width='160'
              height='160'
              className='w-20 h-20 md:w-40 md:h-40 rounded-lg bg-base-200 object-cover'
            />
          </a>
          <div className='flex flex-col gap-4'>
            <a className='hover:underline no-underline' href={`/blog/${slug}`}>
              <div className='text-2xl font-bold'>{title}</div>
            </a>
            <p className='text-sm text-base-content/70'>{desc}</p>
          </div>
        </div>
      ))}
    </PageTransition>
  );
};

export default Blog;
