import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8"
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed"
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1"
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "blue"
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "green"
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "orange"
  },
  {
    name: "unknown",
    uv: 6.67,
    pv: 4800,
    fill: "red"
  }
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

const RadBarCharts = () =>  {
  return (
    <ResponsiveContainer width="100%" height="85%">
    <RadialBarChart
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={12}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#121212" }}
        background={{fill: '#E0E0E0' }}
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={11}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
    </ResponsiveContainer>
  )
};

export default RadBarCharts;
