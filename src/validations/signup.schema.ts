import * as yup from 'yup';

const regex = new RegExp(
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
);

export const SignupSchema = yup.object({
  email: yup.string().email('Email is required'),
  accountName: yup.string().required(),
  password: yup.string().matches(regex)
});
