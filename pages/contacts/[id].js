import Head from "next/dist/shared/lib/head";
import ContactInfo from "../../components/Contactinfo";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`http://jsonplaceholder.typicode.com/${id}`);
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

const Contact = ({ contact }) => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </div>
  );
};

export default Contact;
