import React from "react";
import { Navbar, Nav, Dropdown, Collapse } from "bootstrap-4-react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expand="lg" light bg="light">
      <Navbar.Brand href="#">
        <b>ESTADISTICAS DEL COVID-19</b>
      </Navbar.Brand>
      <Navbar.Toggler target="#navbarSupportedContent" />
      <Collapse navbar id="navbarSupportedContent">
        <Navbar.Nav mr="auto">
          <Nav.Item active>
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </Nav.Item>
          <Nav.Item active>
            <Link to="/cochabamba" className="nav-link">
              Cbba.
            </Link>
          </Nav.Item>
          <Nav.Item active>
            <Link to="/Bolivia" className="nav-link">
              Bolivia
            </Link>
          </Nav.Item>
          <Nav.Item active>
            <Link to="/paises" className="nav-link">
              Paises
            </Link>
          </Nav.Item>
          <Nav.Item active>
            <Link to="/mundo" className="nav-link">
              Mundo
            </Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Link to="/comparador" className="nav-link">
              Comparador
            </Link>
          </Nav.Item> */}
          {/* <Nav.Item dropdown>
            <Nav.Link dropdownToggle>Opciones</Nav.Link>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Nav.Item> */}
        </Navbar.Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
