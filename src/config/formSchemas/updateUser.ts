import * as Yup from 'yup';

export const UpdateUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name Is Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  email: Yup.string().email('Invalid email').required('Email Is Required'),
  mobile: Yup.number(),
  experience: Yup.number().min(0, 'Cannnot be less than zero').max(46, 'Not Valid'),
  functionalRole: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
});
