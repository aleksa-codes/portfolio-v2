import PageTransition from '../components/PageTransition';
import Seo from '../components/SEO';

const title = 'About';

const About = () => {
  return (
    <PageTransition>
      <div className='z-10'>
        <Seo title={title} />
        <h1>About me</h1>
        <p>
          Born in 1996, I grew up during the digital rise. As a teenager, I
          started building my first websites and got more and more interested in
          the digital economy.
        </p>
        <p>
          After school, I started to study{' '}
          <span className='highlight'>
            Computer Science as a bachelor&apos;s degree
          </span>{' '}
          at Singidunum University and completed many online courses alongside.
        </p>
        <p>
          Passionate and self-motivated junior{' '}
          <span className='highlight'>full-stack software developer</span> eager
          to turn ideas into applications. My ambitions are to stay on the
          leading edge of the <span className='highlight'>web development</span>{' '}
          industry and find new learning opportunities or projects to keep
          improving rapidly as a developer.
        </p>
        <p>
          I work to create modern, responsive websites and applications that
          suit the wants and needs of my clients while solving problems through
          innovative solutions and collaboration.
        </p>
        <p>
          Out of the office, you will find me traveling, dreaming of basketball,
          playing video games, and petting all the good cats in the world. 😸
        </p>
      </div>
    </PageTransition>
  );
};

export default About;
