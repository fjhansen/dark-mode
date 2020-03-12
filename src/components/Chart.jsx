import React from "react";
import moment from "moment";
import {useDarkMode} from '../hooks/useDarkMode'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = ({ sparklineData }) => {

  const [darkMode, setDarkMode] = useDarkMode(false);
    
  const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };

  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

  return (
    <div className="chartsss">
    <LineChart className={darkMode ? "dark-mode" : "light-mode"} width={1100} height={300} data={formattedData}>

      <Line type="monotone" dataKey="value" stroke="#8884d8" />

      <CartesianGrid className={darkMode ? "dark-mode" : "light-mode"} stroke={darkMode ? "white" : "purple"} strokeDasharray="5 5" />

      <XAxis dataKey="date" interval={3} />

      <YAxis />

      <Tooltip/>

    </LineChart>
    </div>
  );
};

export default Chart;
