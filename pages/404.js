import {useEffect} from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router'

import Heading from '../components/Heading';

export default function Error404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);
  return (
    <>
      <Head>
        <title>Error - TryNextJS</title>
      </Head>
      <Heading text={'404'} />
      <Heading tag={'h2'} text={'Something is going wrong ...'} />
    </>
  );
}
