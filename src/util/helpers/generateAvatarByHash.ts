import tinycolor from "tinycolor2";

export default (hash: string) => {
  const [r, g, b] = hash
    .substr(0, 3)
    .split("")
    .map((char) => (char.charCodeAt(0) > 255 ? 255 : char.charCodeAt(0)));

  return {
    color: tinycolor({ r, g, b }).toHexString(),
    colorLighten: tinycolor({ r, g, b }).lighten().toHexString(),
  };
};
