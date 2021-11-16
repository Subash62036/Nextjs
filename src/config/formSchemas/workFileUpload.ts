import * as Yup from 'yup';

export const WorkFileUploadSchema = Yup.object().shape({
  title: Yup.string().required('Title Is Required'),
  url: Yup.string(),
  description: Yup.string().required('Description Is Required'),
  evidenceType: Yup.string(),
});
