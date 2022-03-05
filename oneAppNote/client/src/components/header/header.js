import React from "react";
import {
  Container,
  Navbar,
  NavLink,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">OneAppNotes</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/mynotes">My Notes</NavLink>
            <NavDropdown title="Lokesh Suthar" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default header;
