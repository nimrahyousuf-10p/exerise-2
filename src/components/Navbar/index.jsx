import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar id="nav" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="nav1" href="/">
                Home
              </Nav.Link>
              <Nav.Link id="nav2" href="/News">
                News
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
