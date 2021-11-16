import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Is Required'),
  password: Yup.string().min(8, 'Too Short!').max(16, 'Too Long!').required('Password Is Required'),
});
