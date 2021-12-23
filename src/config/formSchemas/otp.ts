import * as Yup from 'yup';
import "yup-phone-lite";


export const OTPSchema = Yup.object().shape({
  otp: Yup.number().required('OTP is Required'),
});
