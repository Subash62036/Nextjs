import * as Yup from 'yup';
import "yup-phone-lite";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const LoginSchema = Yup.object().shape({
  phone: Yup.string().min(10, 'Too Short!')
  .max(10, 'Too Long!').required('Phone number is Required'),
});
