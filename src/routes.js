import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Estadisticas from "./components/pages/Estadisticas";
import Cochabamba from "./components/Cochabamba/Cochabamba";
import Bolivia from "./components/Bolivia/Bolivia";
import Paises from "./components/Paises/Paises";
import Mundo from "./components/Mundo/Mundo";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Estadisticas} exact />
      <Route path="/cochabamba" component={Cochabamba} exact />
      <Route path="/bolivia" component={Bolivia} exact />
      <Route path="/paises" component={Paises} exact />
      <Route path="/mundo" component={Mundo} exact />
    </Switch>
  </App>
);

export default AppRoutes;
