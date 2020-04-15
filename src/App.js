import React from "react";
import { Navbar, Nav, Collapse, Dropdown, Alert, Container, Row, Col } from "bootstrap-4-react";
import './App.css';
import LineGraph from "./LineGraph";


function App() {



  return (
    <>
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">COVID-19</Navbar.Brand>
        <Navbar.Toggler target="#navbarNav" />
        <Collapse navbar id="navbarNav">
          <Navbar.Nav>
            <Nav.ItemLink href="#" active>
              Home
            </Nav.ItemLink>
            <Nav.ItemLink href="#">Features</Nav.ItemLink>
            <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Dropdown</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
            <Nav.ItemLink disabled>Disabled</Nav.ItemLink>
          </Navbar.Nav>
        </Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Alert primary>Primary Alert</Alert>
            <Alert secondary>Secondary Alert</Alert>
          </Col>
          <Col>
            <LineGraph></LineGraph>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
