import React from "react";
import { Navbar, Nav, Dropdown, Collapse } from 'bootstrap-4-react';
import Estadisticas from "./components/pages/Estadisticas";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ComparadorPaises from "./components/pages/ComparadorPaises";


function App() {


  
  return (
    <>
      <Router>
        <Navbar expand="lg" light bg="light">
          <Navbar.Brand href="#"><b>ESTADISTICAS DEL COVID-19</b></Navbar.Brand>
          <Navbar.Toggler target="#navbarSupportedContent" />
          <Collapse navbar id="navbarSupportedContent">
            <Navbar.Nav mr="auto">
              <Nav.Item active>
                  <Link to="/" className="nav-link">Inicio</Link>
              </Nav.Item>
              <Nav.Item>
                  <Link to="/comparador" className="nav-link">Comparador</Link>
              </Nav.Item>
              <Nav.Item dropdown>
                <Nav.Link dropdownToggle>Opciones</Nav.Link>
                <Dropdown.Menu>
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Nav.Item>

            </Navbar.Nav>

          </Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
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
