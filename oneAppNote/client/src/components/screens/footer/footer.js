import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const footer = () => {
  return <footer>
      <Container>
          <Row>
              <Col className="text-center py-3">Copyright &copy; OneAppNotes</Col>
          </Row>
      </Container>
  </footer>
};

export default footer;
