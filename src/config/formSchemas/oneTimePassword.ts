import * as Yup from 'yup';

export const OneTimePasswordSchema = Yup.object().shape({
  tempToken: Yup.number()
    .min(0, 'Too Low')
    .max(999999, 'Not Valid')
    .required('Password Is Required'),
});
