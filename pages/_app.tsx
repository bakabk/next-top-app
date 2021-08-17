import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Top - лучший топ!</title>
      <link rel="icon" href="/favicon2.ico" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
