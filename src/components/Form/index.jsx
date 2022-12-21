import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

const FormComponent = ({ onSubmit }) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Required field'),
    email: Yup.string()
      .email('Must be a valid e-mail address')
      .required('Required field'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      {({errors, touched}) => (
        <Form>
          <label for="name">Name:</label>
          <Field
            type="text"
            name="name"
            id="name"
            autoComplete="off"
          />
          {touched.name && errors && <div>{errors.name}</div>}

          <label for="email">E-mail:</label>
          <Field
            type="email"
            name="email"
            id="email"
            autoComplete="off"
          />
          {touched.email && errors && (
            <div>{errors.email}</div>
          )}

          <Field
            type="submit"
            value="Submit"
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
