import React from "react";
import Header from './shared/components/layout/Header';
import Estadisticas from "./components/pages/Estadisticas";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ComparadorPaises from "./components/pages/ComparadorPaises";


function App() {


  
  return (
    <>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Estadisticas></Estadisticas>
          </Route>
          <Route exact path="/covid-19-statistics">
            <Estadisticas></Estadisticas>
          </Route>
          <Route exact path="/comparador" component={ComparadorPaises}>
            {/* <ComparadorPaises /> */}
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
