import '../styles/globals.scss'
import Image from 'next/image';
import youtubeImg from '../public/youtube.png';
import Layout from "../components/Layout";
import App, {AppProps} from 'next/app';
/*import Head from 'next/head';*/

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      {/*<Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>*/}
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp
