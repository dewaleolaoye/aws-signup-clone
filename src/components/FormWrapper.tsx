import React from 'react';

const FormWrapper = () => {
  return (
    <>
      <form action=''>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='email'
          placeholder='Email address'
        />
      </form>
    </>
  );
};

export default FormWrapper;
