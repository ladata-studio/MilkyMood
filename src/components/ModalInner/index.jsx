import React, { useState } from 'react';
import Form from '../Form';
import { Container, P, H3, H4, Socials, SuccessContainer } from './style';
import { ReactComponent as Happy } from './happy_face.svg';
import { ReactComponent as Instagram } from './icon_instagram.svg';
import { ReactComponent as Facebook } from './icon_facebook.svg';
import { ReactComponent as Twitter } from './icon_twitter.svg';

const Input = ({ handleSuccess }) => (
  <Container>
    <H3>Sign Up</H3>
    <P>
      Join our newsletter to be notified of when pre-release tickets for our
      first ever world tour go on sale.
    </P>
    <Form onSubmit={handleSuccess} />
  </Container>
);

const Success = () => (
  <SuccessContainer>
    <Happy />
    <H4>Yay! We’re so excited!</H4>
    <P>
      We hope you are too. In the meantime you can follow us on social media to
      keep up to do date:
    </P>
    <Socials>
      <Instagram />
      <Facebook />
      <Twitter />
    </Socials>
  </SuccessContainer>
);

const ModalInnerComponent = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => setShowSuccess(true);

  return showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />;
};

export default ModalInnerComponent;
