import { authForm } from "../../types/interfaces";
import { FormikTouched, FormikErrors } from "formik";

export default (
  key: string,
  touched: FormikTouched<authForm>,
  errors: FormikErrors<authForm>
) => {
  if (!touched[key as keyof authForm]) return "";

  if (errors[key as keyof authForm]) return "error";

  return "success";
};
