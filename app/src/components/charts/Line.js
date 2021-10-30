import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import { ResponsiveLine } from "@nivo/line";

import colors from "../../colors";
import { colorspaces, theme } from "./theme";

const Line = ({ axes, data, colorspace, width, height }) => (
  <Box w={width} h={height}>
    <ResponsiveLine
      data={data}
      theme={theme}
      colors={colorspaces[colorspace]}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="basis"
      axisTop={
        axes.top && {
          orient: "top",
          ...axes.top,
        }
      }
      axisRight={
        axes.right && {
          orient: "right",
          ...axes.right,
        }
      }
      axisBottom={
        axes.bottom && {
          orient: "bottom",
          ...axes.bottom,
        }
      }
      axisLeft={
        axes.left && {
          orient: "left",
          ...axes.left,
        }
      }
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: colors.gray["200"],
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: colors.gray["600"],
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </Box>
);

const AxisPropTypes = PropTypes.shape({
  tickSize: PropTypes.number,
  tickPadding: PropTypes.number,
  tickRotation: PropTypes.number,
  legend: PropTypes.string,
  legendOffset: PropTypes.number,
  legendPosition: PropTypes.string,
});

Line.propTypes = {
  axes: PropTypes.shape({
    top: AxisPropTypes,
    bottom: AxisPropTypes,
    left: AxisPropTypes,
    right: AxisPropTypes,
  }),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          x: PropTypes.string.isRequired,
          y: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  colorspace: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Line.defaultProps = {
  axes: {
    top: null,
    bottom: {
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "measurements",
      legendOffset: 36,
      legendPosition: "middle",
    },
    left: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "measured variable",
      legendOffset: -40,
      legendPosition: "middle",
    },
    right: null,
  },
  colorspace: "green",
  width: "100%",
  height: "400px",
};

export default Line;
