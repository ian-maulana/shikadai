import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import Head from 'next/head';
import ReactQuery from '@components/ReactQuery';
import Theme from '@components/Theme';

type NextPageWithLayout = NextPage & { getLayout?: () => React.ReactNode };
type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: React.ReactElement) => page);

  return (
    <>
      <Theme>
        <Head>
          <title>Api Docs</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="./images/favicon.png"
          />
        </Head>

        <ReactQuery>{getLayout(<Component {...pageProps} />)}</ReactQuery>
      </Theme>
    </>
  );
}

export default appWithTranslation(App);
