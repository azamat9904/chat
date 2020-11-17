export default (time) => {
  const t = +time.toFixed();
  if (t < 10) return "0" + t;
  return t.toString();
};
