import React from "react";
import {Container, Navbar, NavLink, Nav, NavDropdown, Form, FormControl,} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/actions/userAction";

const header = ({setSearch}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logOutHandler = ()=>{
    dispatch(logout());
    navigate("/");
  }

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
                onChange={(e)=>{setSearch(e.target.value)}}
              />
            </Form>
          </Nav>
          {userInfo? (<Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink href="/mynotes">My Notes</NavLink>
            <NavDropdown title={`${userInfo && userInfo.name}`} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" onClick={logOutHandler}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>): (<Nav><NavLink href="/login">Login</NavLink></Nav>)}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default header;
