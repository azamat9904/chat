import tinycolor from "tinycolor2";

export default (hash) => {
  const [r, g, b] = hash
    .substr(15, 18)
    .split("")
    .map((char) => (char.charCodeAt(0) > 255 ? 255 : char.charCodeAt(0)));

  return {
    color: tinycolor({ r, g, b }).saturate().toHexString(),
    colorLighten: tinycolor({ r, g, b }).saturate().lighten().toHexString(),
  };
};
