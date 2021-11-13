import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Image from 'next/image'
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import youtubeImg from '../public/youtube.png';

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data = await response.json();
    /*const data = null;*/
  
    if (!data) {
      return {notFound: true};
    }
    return {
      props: {socials: data}
    }
  } catch {
    return {
      props: {socials: null}
    }
  }
  
};

const Home = ({socials}) => {
  return (
    <>
      <Head>
        <title>Home - TryNextJS</title>
      </Head>
      <div className={styles.wrapper}>
        <h1>--- TEST-2 ---</h1>
        <div styles={'width: 100%'}>
          <Heading text={'Next.js Application'} />
        </div>
        <Image
          src={youtubeImg}
          width={500}
          height={350}
          alt={'preview'}
          placeholder={'blur'}
        />
        <Socials socials={socials} />
      </div>
    </>
  );
}

export default Home;
