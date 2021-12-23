import * as Yup from 'yup';
import "yup-phone-lite";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const LoginSchema = Yup.object().shape({
  phone: Yup.string().required('Phone number is Required'),
});
