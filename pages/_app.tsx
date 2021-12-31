import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "../styles/global";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Image Uploader</title>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
