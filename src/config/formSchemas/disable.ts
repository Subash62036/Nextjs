import * as Yup from 'yup';
import "yup-phone-lite";

export const DisableSchema = Yup.object().shape({
  reason: Yup.string().required('Required'),
  remarks: Yup.string().required('Required'),
});
