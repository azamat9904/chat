export default (time: number): string => {
  const t = +time.toFixed();
  if (t < 10) return "0" + t;
  return t.toString();
};
