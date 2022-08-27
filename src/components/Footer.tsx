import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

// days array for Date object
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer
      className={`${
        theme === 'light' ? 'text-gray-400' : 'text-gray-200'
      } w-full md:-mt-16 lg:-mt-48`}
      aria-labelledby='footer-heading'
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 200'>
        <path
          className={`${
            theme === 'light' ? 'text-slate-200' : 'text-gray-800'
          } scale-y-75`}
          fill='currentColor'
          fillOpacity='1'
          d='M0,192L34.3,181.3C68.6,171,137,149,206,160C274.3,171,343,213,411,213.3C480,213,549,171,617,165.3C685.7,160,754,192,823,218.7C891.4,245,960,267,1029,256C1097.1,245,1166,203,1234,186.7C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
        ></path>
      </svg>
      <div className={`${theme === 'light' ? 'bg-slate-200' : 'bg-gray-800'}`}>
        <div className='max-w-5xl mx-auto py-8 px-4 lg:px-0 grid grid-cols-1 md:grid-cols-3'>
          <div className=''></div>
          <div className='text-sm text-center mb-2 md:mb-0'>
            <div
              className={`mb-2 ${
                theme === 'light' ? 'text-slate-600' : 'text-gray-300'
              } font-medium`}
            >
              © 2022{' '}
              <a
                href='https://github.com/aleksastojsic'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                aleksa.codes
              </a>{' '}
              • All Rights Reserved.
            </div>
            <div
              className={`flex md:flex-row mx-auto text-center justify-center ${
                theme === 'light' ? 'text-slate-500' : 'text-gray-500'
              }`}
            >
              Have a great {days[new Date().getDay()]}!
            </div>
          </div>
          {/* <div className='flex flex-grow justify-center md:justify-end items-center space-x-10'>
            <div className='text-slate-900 dark:text-white rounded'>
              <a target='_blank' href='/rss/feed.xml' rel='noreferrer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                  color='currentColor'
                  fill='currentColor'
                  className='w-10 h-10'
                >
                  <path d='M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM150.6 374.6C144.4 380.9 136.2 384 128 384s-16.38-3.121-22.63-9.371c-12.5-12.5-12.5-32.76 0-45.26C111.6 323.1 119.8 320 128 320s16.38 3.121 22.63 9.371C163.1 341.9 163.1 362.1 150.6 374.6zM249.6 383.9C249 383.1 248.5 384 247.1 384c-12.53 0-23.09-9.75-23.92-22.44C220.5 306.9 173.1 259.5 118.4 255.9c-13.22-.8438-23.25-12.28-22.39-25.5c.8594-13.25 12.41-22.81 25.52-22.38c77.86 5.062 145.3 72.5 150.4 150.4C272.8 371.7 262.8 383.1 249.6 383.9zM345 383.1C344.7 384 344.3 384 343.1 384c-12.8 0-23.42-10.09-23.97-23C315.6 254.6 225.4 164.4 119 159.1C105.8 159.4 95.47 148.3 96.02 135C96.58 121.8 107.9 111.2 121 112c130.7 5.469 241.5 116.3 246.1 246.1C368.5 372.3 358.3 383.4 345 383.1z'></path>
                </svg>
              </a>
            </div>
            <div className='text-slate-900 dark:text-white'>
              <a
                target='_blank'
                href='https://twitter.com/aleksacodes'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  color='#1DA1F2'
                  fill='currentColor'
                  className='w-10 h-10'
                >
                  <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
                </svg>
              </a>
            </div>
            <div className='text-slate-900 dark:text-white'>
              <a
                target='_blank'
                href='https://github.com/aleksastojsic'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 496 512'
                  color='currentColor'
                  fill='currentColor'
                  className='w-10 h-10'
                >
                  <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
                </svg>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
