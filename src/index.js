import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Header from "./shared/components/layout/Header";
import Estadisticas from "./components/pages/Estadisticas";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComparadorPaises from "./components/pages/ComparadorPaises";

import AppRoutes from "./routes";

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

const renderApp = (Component) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Component></Component>
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderApp(AppRoutes);
