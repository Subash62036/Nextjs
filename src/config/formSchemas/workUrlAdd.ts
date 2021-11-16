import * as Yup from 'yup';

export const WorkUrlAddSchema = Yup.object().shape({
  title: Yup.string().required('Title Is Required'),
  url: Yup.string().required('URL Is Required'),
  description: Yup.string().required('Description Is Required'),
  evidenceType: Yup.string(),
});
