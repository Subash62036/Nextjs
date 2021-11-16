import * as Yup from 'yup';

export const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().min(8, 'Too Short!').max(16, 'Too Long!').required('Password Is Required'),
  newPassword: Yup.string().min(8, 'Too Short!').max(16, 'Too Long!').required('Password Is Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
});
