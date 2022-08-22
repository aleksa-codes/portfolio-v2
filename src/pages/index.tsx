import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Typed from 'react-typed';
import Image from 'next/image';
import PageTransition from '../components/PageTransition';

const text = 'Hello World';

const Home: NextPage = () => {
  return (
    <PageTransition>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className='flex flex-row items-center justify-start'>
          <Typed
            strings={[text]}
            typeSpeed={160}
            loop={false}
            className='mr-4'
          ></Typed>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 0.5, 1],
              rotate: [0, 14, -8, 14, -4, 10, 0, 0]
            }}
            transition={{
              scale: { duration: 0.75, ease: 'easeInOut', delay: 2.25 },
              rotate: {
                duration: 2.5,
                ease: 'easeOut',
                delay: 3.5,
                repeat: 3,
                repeatDelay: 4
              }
            }}
          >
            <Image
              src='/waving-hand.webp'
              alt='waving hand'
              width={48}
              height={48}
              layout='fixed'
            />
          </motion.div>
        </h1>
        <h1 className='mb-[-48px] lg:mb-[-48px]'>My name is Aleksa</h1>
        <h2>
          I design and build{' '}
          <span className='highlight'>things for the web.</span>
        </h2>
        <h3>Computer Science Student and Web Developer. Based in Belgrade.</h3>
      </main>
    </PageTransition>
  );
};

export default Home;
