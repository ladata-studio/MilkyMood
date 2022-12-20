import React from 'react';

const FormComponent = ({ handleSuccess }) => {
  return (
    <form onSubmit={handleSuccess}>
      <label for="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        autoComplete="off"
        required
      />

      <label for="email">E-mail:</label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="off"
        required
      />

      <input
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default FormComponent;
