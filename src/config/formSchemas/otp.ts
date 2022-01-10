import * as Yup from 'yup';
import "yup-phone-lite";


export const OTPSchema = Yup.object().shape({
  otp: Yup.string().min(6, 'Too Short!')
  .max(7, 'Too Long!').required('OTP is Required'),
});
