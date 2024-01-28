import "../app/globals.css";
import RootLayout from "../app/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Cobee's GPTs</title>
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default MyApp;
