import React from "react";
import { Navbar, Nav, Button, Dropdown, Form, Collapse, Container } from 'bootstrap-4-react';
import './App.css';
import GlobalArea from "./GlobalArea";
import SpecificArea from "./SpecificArea";
import Timeline from "./Timeline";


function App() {


  
  return (
    
    <>
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">
          Navbar
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">
            <Nav.Item active>
              <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Dropdown</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Navbar.Nav>
          <Form inline my="2 lg-0">
            <Form.Input type="search" placeholder="Search" mr="sm-2" />
            <Button outline success my="2 sm-0">Search</Button>
          </Form>
        </Collapse>
      </Navbar>

      <Container>
        
        <GlobalArea></GlobalArea>
        
        <SpecificArea></SpecificArea>

        <Timeline></Timeline>

      </Container>
      

    </>
  );
}

export default App;
