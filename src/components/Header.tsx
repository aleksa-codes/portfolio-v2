import Link from 'next/link';
import DarkMode from './DarkMode';

const navItems = [
  {
    href: '/about',
    label: 'About'
  },
  {
    href: '/projects',
    label: 'Projects'
  },
  {
    href: '/blog',
    label: 'Blog'
  },
  {
    href: '/contact',
    label: 'Contact'
  }
];

const Header = () => {
  return (
    <div className='navbar bg-base-100 pt-4'>
      <div className='flex-1'>
        <Link href='/'>
          <a className='p-2 hover:underline md:text-2xl font-bold flex gap-4 items-center'>
            {/* If you want your image before the site title, uncomment img below and remove pt-4 from the 1st parent div above */}
            {/* Change the img to Image with next/image */}
            {/* <img src="https://api.lorem.space/image/face?w=96&h=96" width="48" height="48" alt="Astro Blog" class="rounded-full bg-base-200 md:w-12 md:h-12 w-9 h-9"> */}
            aleksa.codes
          </a>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal p-0 hidden md:flex'>
          {navItems.map(({ href, label }) => (
            <li key={href} className='mr-[1px]'>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <DarkMode />
        <div className='dropdown dropdown-end md:hidden'>
          <label tabIndex={0} className='btn btn-ghost btn-square'>
            <svg
              className='first:w-6 h-6 stroke-current'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#000'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='3' y1='12' x2='21' y2='12'></line>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <line x1='3' y1='18' x2='21' y2='18'></line>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 bg-base-200 rounded-box w-52 menu-compact'
          >
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
