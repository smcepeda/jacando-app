// @ts-nocheck

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useOpenWeather from "./useOpenWeather";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const APIKEY = "1720d388042d7ca921450ed9002384d1";

const options = {
  responsive: true,

  interaction: {
    mode: "index" as const,
    intersect: true,
  },
  stacked: true,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis",
    },
  },

  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,

      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

export default function WeatherChart() {
  const weather = useOpenWeather({ apiKey: APIKEY });

  const convertDate = (val) => {
    let unix_timestamp = val;
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var date = new Date(unix_timestamp * 1000);
    var day = days[date.getDay()];

    return day;
  };

  const labels = weather?.daily.slice(0, 7).map((d: any) => convertDate(d.dt));

  const data = {
    labels,
    datasets: [
      {
        label: "High Temperature",
        data: weather?.daily.slice(0, 7).map((d: any) => d.temp.max),
        backgroundColor: "red",
      },
      {
        label: "Low Temperature",
        data: weather?.daily.slice(0, 7).map((d: any) => d.temp.min),
        backgroundColor: "#0d6efd",
      },
    ],
  };

  return (
    <div style={{ maxHeight: "300px" }}>
      <Line data={data} style={{ maxHeight: "300px" }} />
    </div>
  );
}
