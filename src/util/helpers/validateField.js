export default (
  key,
  touched,
  errors
) => {
  if (!touched[key]) return "";

  if (errors[key]) return "error";

  return "success";
};
