import React, { useState } from "react";
import MainScreen from "../../components/mainScreen";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../register/registerScreen.css";
import ErrorMessage from "../errorMessage";
import { useDispatch, useSelector } from "react-redux";
import { getRegister } from "../../redux/actions/action";
import Loading from "../loading";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [message, setMessage] = useState(null);
  const [picmessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();
  const registerData = useSelector((state)=>state.registerReducer);
  const {loading, error} = registerData;
//   console.log(registerData);
//   console.log(error);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage(null);
      const data = {
        name, email, password, confirmPassword
    }
    dispatch(getRegister(data));
    console.log(name, email, password, confirmPassword);
    }
  };
  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} 
        {loading && <Loading/>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Enter you Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              placeholder="Enter you Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.File
              id="custom-file"
              type="image/png"
              label="Upload Profile Picture"
              custom
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
}

export default RegisterScreen;
