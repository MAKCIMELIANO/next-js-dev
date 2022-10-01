import Heading from "../../components/Heading";
import Head from "next/dist/shared/lib/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

const Contacts = ({ contact }) => {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {contact &&
          contact.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Contacts;
