import {GetServerSideProps} from 'next';
import { FC } from 'react';
import Head from 'next/head';
import ContactInfo from "../../components/ContactInfo";
import {contactType} from "../../types";

type contactTypeProps = {
  contact: contactType,
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params ? context.params.id : null;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();
  /*const data = null;*/

  if (!data) {
    return {notFound: true};
  }
  return {
    props: {contact: data}
  };
};

const Contact: FC<contactTypeProps> = ({contact}) => {
  return (
    <>
      <Head>
        <title>Contact - TryNextJS</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
}

export default Contact;
