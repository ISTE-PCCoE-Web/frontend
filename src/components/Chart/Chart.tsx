import React from "react";
import "./chart.css";
import AddChart from "./AddChart";

export default function Chart() {
  return (
    <div className="App">
      <div className="header">
        React Employee Hierarchy Chart
        <span className="follow">
          <a href="https://twitter.com/naveenda_">
            <img
              alt="Follow @naveenda_"
              src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
            />
            Follow @naveenda_
          </a>
        </span>
      </div>
      <div className="container">
        <AddChart />
      </div>
    </div>
  );
}