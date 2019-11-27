import * as Yup from 'yup';
import { appConfig } from './appConfig';

export const validators = {
  name: Yup.string().required('Imię jest wymagane'),
  email: Yup.string()
    .email('Niepoprawny format e-maila')
    .required('Email jest wymagany')
};
