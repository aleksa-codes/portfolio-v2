import Link from 'next/link';
import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';

export default function Custom404() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return null;
  }

  return (
    <PageTransition>
      <div className='flex flex-col items-center mt-24 lg:mt-24 font-bold h-full'>
        <div className='text-8xl'>404</div>
        <div className='text-4xl my-4'>Page not found</div>
        <button className='mt-5'>
          <Link href='/'>
            <a className='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring'>
              <span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0'></span>
              <span className='relative block px-8 py-3 bg-base-100 border border-current'>
                Go Home
              </span>
            </a>
          </Link>
        </button>
      </div>
    </PageTransition>
  );
}
