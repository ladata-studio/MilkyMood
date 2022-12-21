import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, useField } from 'formik';
import { Error, Input, Label, Submit } from './styles';

const InputComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Label>
      {label}:{' '}
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
      <Input
        {...field}
        {...props}
      />
    </Label>
  );
};

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
      {() => (
        <Form>
          <InputComponent
            type="text"
            name="name"
            label="Name"
            autoComplete="off"
          />

          <InputComponent
            type="email"
            name="email"
            id="email"
            label="E-mail"
            autoComplete="off"
          />

          <Submit
            type="submit"
            value="Submit"
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
