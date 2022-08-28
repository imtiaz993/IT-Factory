/* eslint-disable @next/next/no-img-element */

import MailchimpSubscribe from "react-mailchimp-subscribe";
import ContactComponent from "./ContactComponent";

const Mailchimp = ({
  contactTitle,
  contactDesc,
  button1Text,
  button2Text,
  noPading,
}) => {
  const MAILCHIMP_URL =
    "";

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};

        return (
          <ContactComponent
            contactTitle={contactTitle}
            contactDesc={contactDesc}
            button1Text={button1Text}
            button2Text={button2Text}
            noPading={noPading}
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default Mailchimp;
