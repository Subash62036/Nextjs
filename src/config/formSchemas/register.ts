import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name Is Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  email: Yup.string().email('Invalid email').required('Email Is Required'),
  username: Yup.string().min(5, 'Too Short!').max(32, 'Too Long!'),
  password: Yup.string().min(8, 'Too Short!').max(32, 'Too Long!').required('Password Is Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
