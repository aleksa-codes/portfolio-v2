import Link from 'next/link';
import PageTransition from '../components/PageTransition';
import Seo from '../components/SEO';

export default function Custom404() {
  return (
    <PageTransition>
      <Seo title='404' />
      <div className='flex flex-col justify-start items-center font-bold h-full'>
        <div className='text-8xl'>404</div>
        <div className='text-4xl my-4'>Page not found :(</div>
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
