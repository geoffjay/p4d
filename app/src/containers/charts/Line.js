import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { LineChart } from "../../components/charts";

import {
  fetchMeasurementsById,
  selectMeasurementData,
} from "../../state/features/measurement";

import colors from "../../colors";

const LineChartContainer = ({ config }) => {
  const dispatch = useDispatch();
  const measurementData = useSelector(selectMeasurementData);
  const measurementDataStatus = useSelector(state => state.measurement.status);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (measurementDataStatus === "idle") {
      dispatch(fetchMeasurementsById());
      setIsLoading(false);
    }
  }, [measurementDataStatus, dispatch]);

  const { colorspace, width, height } = config;

  return (
    <LineChart
      data={!isLoading && measurementData}
      colorspace={colorspace}
      w={width}
      h={height}
      boxShadow={`${colors.gray["500"]} 0px 3px 5px, ${colors.gray["500"]} 0px 3px 5px;`}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    />
  );
};

LineChartContainer.propTypes = {
  config: PropTypes.shape({
    colorspace: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

LineChartContainer.defaultProps = {
  config: {
    colorspace: "aurora",
    width: "100%",
    height: "400px",
  },
};

export default LineChartContainer;
