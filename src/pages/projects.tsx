import PageTransition from '../components/PageTransition';
import Image from 'next/image';
import { BrandGithub, ExternalLink } from 'tabler-icons-react';
import Seo from '../components/SEO';

const title = 'Projects';

const projects = [
  {
    name: 'Project #1',
    desc: 'Laudantium iste repellat et. Et officiis corporis. At est placeat voluptas aut. Soluta dolor quae quae tempora. Voluptatibus quibusdam natus. Facilis ea repellendus expedita voluptatum rerum autem.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/aleksastojsic',
    demo: 'https://example.com',
    img: 'https://picsum.photos/800/600?random=24'
  },
  {
    name: 'Project #2',
    desc: 'Laudantium iste repellat et. Et officiis corporis. At est placeat voluptas aut. Soluta dolor quae quae tempora. Voluptatibus quibusdam natus. Facilis ea repellendus expedita voluptatum rerum autem.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/aleksastojsic',
    demo: 'https://example.com',
    img: 'https://picsum.photos/800/600?random=8'
  },
  {
    name: 'Project #3',
    desc: 'Laudantium iste repellat et. Et officiis corporis. At est placeat voluptas aut. Soluta dolor quae quae tempora.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/aleksastojsic',
    demo: 'https://example.com',
    img: 'https://picsum.photos/800/600?random=3'
  }
];

const Projects = () => {
  return (
    <PageTransition>
      <Seo title={title} />
      <h1>Projects</h1>
      <div className='flex flex-col gap-4 md:gap-4'>
        {/* map and add <div className='divider'></div> after each project except the last one */}
        {projects.map(
          ({ name, desc, tech, github, demo, img }, index, array) => (
            <div key={index}>
              <div
                className={`flex flex-col-reverse justify-between items-center gap-8 ${
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
                      className={`text-3xl font-bold text-base-content text-center ${
                        index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                      }`}
                    >
                      {name}
                    </div>
                    <p className='text-base'>{desc}</p>
                  </div>
                  <div
                    className={`flex gap-4 flex-row justify-start  ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <p className='text-base font-bold highlight w-fit'>
                      {tech.join(' • ')}
                    </p>
                  </div>

                  <div
                    className={`flex gap-4 flex-row justify-start text-base ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <a
                      href={demo}
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
                <a
                  href={demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-row w-full md:w-fit justify-center hover:scale-105 transition-all duration-250 ease-in-out'
                >
                  <Image
                    src={img}
                    alt={name}
                    width={400}
                    height={300}
                    className='rounded-lg'
                  />
                </a>
              </div>
              {index !== array.length - 1 && (
                <div className='divider py-4 md:py-8' />
              )}
            </div>
          )
        )}

        <div className='flex flex-row justify-center items-center w-full mt-12'>
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
