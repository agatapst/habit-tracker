import * as Yup from 'yup';
import { appConfig } from './appConfig';

export const validators = {
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid format')
    .required('E-mail is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
};
