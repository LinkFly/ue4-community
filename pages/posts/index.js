import Link from 'next/link';
import Head from 'next/head';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  /*const data = null;*/
  
  if (!data) {
    return {notFound: true};
  }
  return {
    props: {posts: data}
  };
};

const Posts = ({posts}) => {
  return (
    <>
      <Head>
        <title>Posts - TryNextJS</title>
      </Head>
      <h1>Posts list:</h1>
      <ul>
        {posts && posts.map(({id, title}) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
