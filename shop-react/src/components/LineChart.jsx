import React from "react";
import ReactApexChart from "react-apexcharts";
export default function LineChart() {
  const options = {
    chart: {
      type: "line",
    },
    series: [
      {
        name: "My Series",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };
  return (
    <>
      <ReactApexChart
        options={options}
        series={options.series}
        type="line"
        height={350}
      />
    </>
  );
}
