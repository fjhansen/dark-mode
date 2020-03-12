import React from "react";
import Chart from "./Chart";
import NavBar from './Navbar'
import {useDarkMode} from '../hooks/useDarkMode'
import {useLightMode} from '../hooks/useLightMode'

const Charts = ({ coinData }) => {

  const [darkMode, setDarkMode] = useDarkMode(false);
  const [lightMode, setLightMode] = useLightMode(false);
    
  const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };

  return (
    <div className={darkMode ? "charts dark-mode" : "charts light-mode"}>
      {coinData.map(coin => (
        <div className={darkMode ? "chart__container dark-mode" : "chart__container light-mode"} key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart className={darkMode ? "dark-mode" : "light-mode"} sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
