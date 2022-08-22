import Link from 'next/link';
import DarkMode from './DarkMode';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link href='/'>
          {/* <img src="https://api.lorem.space/image/face?w=96&h=96" width="48" height="48" alt="Astro Blog" class="rounded-full bg-base-200 md:w-12 md:h-12 w-9 h-9"> */}

          <a className='p-2 hover:underline md:text-2xl font-bold flex gap-4 items-center'>
            aleksa.codes
          </a>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal p-0 hidden md:flex'>
          <li className='menu-item mx-1'>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li className='menu-item mx-1'>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li className='menu-item mx-1'>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <DarkMode />
        <div className='dropdown dropdown-end md:hidden'>
          <label tabIndex={0} className='btn btn-ghost btn-square'>
            <svg
              className='feather feather-menu first:w-6 h-6 stroke-current'
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
            <li className='menu-item'>
              <Link href='/about'>
                <a className='menu-link'>About</a>
              </Link>
            </li>
            <li className='menu-item'>
              <Link href='/blog'>
                <a className='menu-link'>Blog</a>
              </Link>
            </li>
            <li className='menu-item'>
              <Link href='/contact'>
                <a className='menu-link'>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
