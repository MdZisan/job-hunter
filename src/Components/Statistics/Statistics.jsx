import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";
import TitleHeader from "../Header/TitleHeader";

const Statistics = () => {
  const assignments = [
    { name: "assignment 1", mark: 60 },
    { name: "assignment 2", mark: 50 },
    { name: "assignment 3", mark: 60 },
    { name: "assignment 4", mark: 60 },
    { name: "assignment 5", mark: 45 },
    { name: "assignment 6", mark: 59 },
    { name: "assignment 7", mark: 60 },
  ];
  const cardinal = curveCardinal.tension(0.2);

  return (
    <div>
      <TitleHeader>Assignment Statistics</TitleHeader>
<div className="mt-4 overflow-hidden">
  {/* display for mobile    */}
<div className="flex md:hidden  justify-center items-center p-2">

    
<AreaChart
  width={350}
  height={350}
  data={assignments}
  margin={{
    top: 10,
    right: 30,
    left: 0,
    bottom: 0,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Area type="monotone" dataKey="umarkv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
  <Area type={cardinal} dataKey="mark" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
</AreaChart>


</div>
{/* display for Destop  */}
<div className=" hidden md:block w-[800px]  mx-auto p-4">


<AreaChart
  width={800}
  height={400}
  data={assignments}
  margin={{
    top: 10,
    right: 30,
    left: 0,
    bottom: 0,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Area type="monotone" dataKey="umarkv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
  <Area type={cardinal} dataKey="mark" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
</AreaChart>


</div>
</div>
    </div>
  );
};

export default Statistics;
