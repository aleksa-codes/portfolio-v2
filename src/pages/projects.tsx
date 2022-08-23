import PageTransition from '../components/PageTransition';
import Seo from '../components/SEO';
import Image from 'next/image';
import { BrandGithub, ExternalLink } from 'tabler-icons-react';

const title = 'Projects';

const projects = [
  {
    name: 'Project #1',
    desc: 'Laudantium iste repellat et. Et officiis corporis. At est placeat voluptas aut. Soluta dolor quae quae tempora. Voluptatibus quibusdam natus. Facilis ea repellendus expedita voluptatum rerum autem.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/aleksastojsic',
    website: 'https://example.com',
    img: 'https://picsum.photos/400/400?random=1'
  },
  {
    name: 'Project #2',
    desc: 'Laudantium iste repellat et. Et officiis corporis. At est placeat voluptas aut. Soluta dolor quae quae tempora. Voluptatibus quibusdam natus. Facilis ea repellendus expedita voluptatum rerum autem.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/aleksastojsic',
    website: 'https://example.com',
    img: 'https://picsum.photos/400/400?random=2'
  },
  {
    name: 'Project #3',
    desc: 'Laudantium iste repellat et. Et officiis corporis. At est placeat voluptas aut. Soluta dolor quae quae tempora.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/aleksastojsic',
    website: 'https://example.com',
    img: 'https://picsum.photos/400/400?random=3'
  }
];

const Projects = () => {
  return (
    <PageTransition>
      <Seo title={title} />
      <h1>Projects</h1>
      <div className='flex flex-col gap-8 md:gap-16'>
        {projects.map(({ name, desc, tech, github, website, img }, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse justify-between items-center gap-4 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <div
              className={`flex flex-col w-full md:w-1/2 text-left ${
                index % 2 === 0 ? 'md:text-left' : 'md:text-right'
              }`}
            >
              <div className='flex flex-col'>
                <div
                  className={`text-3xl font-bold text-center ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}
                >
                  {name}
                </div>
                <p className='text-base'>{desc}</p>
              </div>
              <div
                className={`flex gap-4 flex-row justify-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <p className='text-base font-bold highlight w-fit'>
                  {tech.join(' • ')}
                </p>
              </div>

              <div
                className={`flex gap-4 flex-row justify-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <a
                  href={website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary no-underline flex flex-row items-center'
                >
                  <ExternalLink size={32} />
                  <span className='ml-1'>Demo</span>
                </a>
                <a
                  href={github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary no-underline flex flex-row items-center'
                >
                  <BrandGithub size={32} />
                  <span className='ml-1'>GitHub</span>
                </a>
              </div>
            </div>
            <div className='flex flex-row w-full md:w-fit justify-center'>
              <Image
                src={img}
                alt={name}
                width={320}
                height={320}
                className='rounded-lg'
              />
            </div>
          </div>
        ))}
        <div className='flex flex-row justify-center items-center w-full'>
          <a
            href='https://github.com/aleksastojsic'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-secondary flex flex-row items-center justify-center text-primary-content'
          >
            <BrandGithub size={24} />
            <span className='ml-2 mt-1 uppercase'>View more on GitHub</span>
          </a>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
