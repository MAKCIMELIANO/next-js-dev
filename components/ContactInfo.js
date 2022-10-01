import Heading from "./Heading";

const ContactInfo = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  return (
    <div>
      <Heading tag="h3" text="Empty contact" />
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${city}, ${zipcode}`}
      </div>
    </div>
  );
};

export default ContactInfo;
