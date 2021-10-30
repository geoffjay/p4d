import colors from "../../colors";

const flattenColors = () => {
  return Object.entries(colors)
    .map(([key, value]) => {
      const obj = Object();
      obj[key] = Object.values(value);
      return obj;
    })
    .reduce((map, object) => {
      const key = Object.keys(object)[0];
      const value = Object.values(object)[0];
      map[key] = value;
      return map;
    });
};

export const colorspace = [
  colors.nord[7],
  colors.nord[8],
  colors.nord[9],
  colors.nord[10],
  colors.nord[11],
  colors.nord[12],
  colors.nord[13],
  colors.nord[14],
  colors.nord[15],
];

export const colorspaces = flattenColors();

export const theme = {
  background: colors.gray["800"],
  textColor: colors.gray["100"],
  fontSize: 11,
  axis: {
    domain: {
      line: {
        stroke: colors.blue["500"],
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: colors.teal["500"],
        strokeWidth: 1,
      },
    },
  },
  grid: {
    line: {
      stroke: colors.gray["300"],
      strokeWidth: 1,
    },
  },
};
