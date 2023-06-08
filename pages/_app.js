import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon/favicon.jpg' />
        <meta
          name='description'
          content='StepAdvise est à vos côtés pour le processus décisionnel sur 4 axes stratégiques : AMO, TLPE, RLP(i), publicité extérieure'
        />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
