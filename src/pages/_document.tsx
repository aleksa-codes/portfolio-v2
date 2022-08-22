import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import Script from 'next/script';

const APP_NAME = 'aleksa.codes';
// const APP_DESCRIPTION = "Aleksa's personal website";

/////////////////////////////////////////////////////////////
// credit: https://sreetamdas.com/blog/the-perfect-dark-mode
function setInitialColorMode() {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem('theme');

    const hasExplicitPreference = typeof preference === 'string';

    /**
     * If the user has explicitly chosen light or dark,
     * use it. Otherwise, this value will be null.
     */

    if (hasExplicitPreference) {
      return preference;
    }

    // If there is no saved preference, use a media query

    const mediaQuery = '(prefers-color-scheme: dark)';

    const mql = window.matchMedia(mediaQuery);

    const hasImplicitPreference = typeof mql.matches === 'boolean';

    if (hasImplicitPreference) {
      return mql.matches ? 'dark' : 'light';
    }

    // default to 'light'.

    return 'light';
  }

  const colorMode = getInitialColorMode();

  // add HTML attribute if dark mode

  if (colorMode === 'dark') {
    document.documentElement.setAttribute('data-theme', 'night');
  } else {
    document.documentElement.setAttribute('data-theme', 'winter');
  }
}
// our function needs to be a string

const blockingSetInitialColorMode = `(function() {
              ${setInitialColorMode.toString()}
              setInitialColorMode();
      })()`;
////////////////////////////////////////////////////////
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* PWA start */}
          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          {/* <meta name='description' content={APP_DESCRIPTION} /> */}
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#000000' />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}
          {/* <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/icons/ios/180.png'
            /> */}
          {/* <link rel='manifest' href='/manifest.json' /> */}
          {/* <link rel='shortcut icon' href='/favicon.ico' /> */}
          {/* PWA end */}
          {/* <link
              href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
              rel='stylesheet'
            /> */}
          <link
            href='https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='transition-[background-color] duration-500'>
          <Main />
          <NextScript />
          <Script
            id='blockingSetInitialColorMode'
            dangerouslySetInnerHTML={{
              __html: blockingSetInitialColorMode
            }}
            strategy='beforeInteractive'
          ></Script>
          <Script
            data-name='BMC-Widget'
            data-cfasync='false'
            src='https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
            data-id='aleksa'
            data-description='Support me on Buy me a coffee!'
            data-message='Thanks for visiting. Made with 💻 and ☕.'
            data-color='#79D6B5'
            data-position='Right'
            data-x_margin='8'
            data-y_margin='8'
            strategy='beforeInteractive'
          ></Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
