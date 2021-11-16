import * as Yup from 'yup';

export const WaitlistSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Is Required'),
});
