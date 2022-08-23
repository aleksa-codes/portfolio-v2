import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Seo from '../components/SEO';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';

interface MyAppProps extends AppProps {
  canonical: string;
}

function MyApp({ Component, pageProps, canonical }: MyAppProps) {
  return (
    <ThemeProvider value={{ light: 'winter', dark: 'night' }}>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        <Seo canonical={canonical} />
        <Component {...pageProps} canonical={canonical} />
      </Layout>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = ({ ctx }: any) => {
  const isProd = process.env.NODE_ENV === 'production';
  const base = isProd
    ? 'https://www.aleksa.vercel.app'
    : 'http://localhost:3000';
  const { asPath } = ctx;
  const canonical = base + asPath;

  return {
    canonical
  };
};

export default MyApp;
