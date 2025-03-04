// src/pages/_app.tsx

import type { AppType } from "next/app";

import "../styles/globals.css";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
