import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

import { LineChart } from "../components/charts";
import { MockTransportationData as data } from "../components/charts/mocks";

const Dashboard = () => {
  const [measurementData, setMeasurementData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const { api } = window.backend;
    const fetchData = async () => {
      setIsLoading(true);
      api.GetMeasurementData().then(data => {
        const measurements = JSON.parse(data);
        setMeasurementData(measurements);
      });
    };

    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <Box w="100%" p={4} color="white">
      <LineChart data={data} colorspace="green" />
      <LineChart data={!isLoading && measurementData} colorspace="red" />
    </Box>
  );
};

export default Dashboard;
