import React from "react";
import { Box } from "@chakra-ui/react";

import { LineChart } from "../components/charts";
import { LineChart as LineChartContainer } from "../containers/charts";

import { MockTransportationData as data } from "../components/charts/mocks";

const config = {
  colorspace: "frost",
  width: "80%",
  height: "350px",
};

const Dashboard = () => {
  return (
    <Box w="100%" p={4} color="white">
      <LineChart data={data} colorspace="aurora" />
      <LineChartContainer config={config} />
    </Box>
  );
};

export default Dashboard;
