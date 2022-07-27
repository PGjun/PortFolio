import { useContext } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { regionChartFunc } from "../script/regionChartFunc";
import { AllDBdataContext } from "../contexts/AllDBdataContext";

export const PriceChart = () => {
  const { allDBdata } = useContext(AllDBdataContext);
  const chartData = regionChartFunc(allDBdata);
  return (
    <BarChart
      width={1270}
      height={350}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="region" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="최저가" stackId="a" fill="skyblue" />
      <Bar dataKey="평균가" stackId="a" fill="coral" />
      <Bar dataKey="최고가" stackId="a" fill="#dc4343" />
    </BarChart>
  );
};
