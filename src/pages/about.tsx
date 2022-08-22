import PageTransition from '../components/PageTransition';
const About = () => {
  return (
    <PageTransition>
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
        I am a passionate, energetic, and self-motivated junior{' '}
        <span className='highlight'>full-stack software developer</span> eager
        to turn ideas into applications. My ambitions are to stay on the leading
        edge of the <span className='highlight'>web development</span> industry
        and find new learning opportunities or projects to keep improving
        rapidly as a developer.
      </p>
      <p>
        Out of the office, you will find me dreaming of basketball, playing
        video games, and petting all the good cats.
      </p>
    </PageTransition>
  );
};

export default About;
