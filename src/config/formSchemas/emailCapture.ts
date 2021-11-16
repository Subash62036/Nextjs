import * as Yup from 'yup';

export const emailCaptureSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Is Required'),
});