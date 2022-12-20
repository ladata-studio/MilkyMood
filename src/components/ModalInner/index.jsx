import React, { useState } from 'react';
import FormComponent from '../Form';
import { Container } from './style';

const ModalInnerComponent = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => setShowSuccess(true);

  return (
    <>
      {!showSuccess && (
        <Container>
          <h3>Sign Up</h3>
          <p>
            Join our newsletter to be notified of when pre-release tickets for
            our first ever world tour go on sale.
          </p>
          <FormComponent onSubmit={handleSuccess} />
        </Container>
      )}

      {showSuccess && (
        <Container>
          <h4>Yay! We’re so excited!</h4>
          <p>
            We hope you are too. In the meantime you can follow us on social
            media to keep up to do date:
          </p>
        </Container>
      )}
    </>
  );
};

export default ModalInnerComponent;
