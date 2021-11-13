import Head from 'next/head';
import { FC } from 'react';
import {GetStaticProps} from 'next';
import {useEffect, useState} from "react";
import Heading from "../../components/Heading";
import Link from 'next/link';
import {contactType} from "../../types";

type contactsProps = {
  contacts: [contactType],
}
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  /*const data = null;*/

  if (!data) {
    return {notFound: true};
  }
  return {
    props: {contacts: data}
  };
};

const Contacts: FC<contactsProps> = ({contacts}) => {
  /*const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setContacts(data);
    }
    fetchData();
  }, []);*/
  return (
    <>
      <Head>
        <title>Contacts - TryNextJS</title>
      </Head>
      <Heading text={'Contacts list:'} />
      <ul>
        {contacts && contacts.map(({id, name, email}) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}><a><strong>{name}</strong> ({email})</a></Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Contacts;
