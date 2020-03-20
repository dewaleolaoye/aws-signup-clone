import React from 'react';
import './FormWrapper.scss';

const FormWrapper = () => {
  return (
    <div className='form-wrapper'>
      <form action=''>
        <div className='input-wrapper'>
          <label htmlFor='email'>Email</label>
          <input id='email' name='email' type='email' required />
        </div>

        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input id='password' name='password' type='password' required />
        </div>

        <div className='input-wrapper'>
          <label htmlFor='confirmPassword'>Confirm password</label>
          <input
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            required
          />
        </div>

        <div className='input-wrapper'>
          <label htmlFor='acct-name'>AWS account name</label>
          <input id='acct-name' name='acct-name' type='text' required />
        </div>

        <button>Continue</button>
      </form>
    </div>
  );
};

export default FormWrapper;
