const Footer = () => (
  <footer className='footer footer-center p-4'>
    <div>
      <p className='text-sm text-base-content/70'>
        &copy; {new Date().getFullYear()} – {''}
        <a
          className='link'
          href='https://github.com/aleksastojsic'
          target='_blank'
          rel='noreferrer'
        >
          aleksa.codes
        </a>{' '}
        • Powered by{' '}
        <a
          className='link'
          href='https://nextjs.org/'
          target='_blank'
          rel='noreferrer'
        >
          Next.js
        </a>{' '}
        &{' '}
        <a
          className='link'
          href='https://vercel.com/'
          target='_blank'
          rel='noreferrer'
        >
          Vercel
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
