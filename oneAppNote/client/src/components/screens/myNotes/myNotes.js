import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../mainScreen";
import "./myNotes.css";
import notes from "../../../Data/notes";

const myNotes = () => {
  const removeNote = () => {
    console.log("hello");
  };
  return (
    // <div>myNotes</div>
    <MainScreen title="Welcome back Lokesh">
      <Link to="/createnote">
        <Button style={{ marginLeft: "10px", marginBottom: "6px" }} size="lg ">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => {
        const { _id, title, content, category } = note;
        return (
          <Accordion>
            <Card style={{ margin: "10px" }} key={_id}>
              <Card.Header style={{ display: "flex" }}>
                <span className="titleName">
                  <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                    {title}
                  </Accordion.Toggle>
                </span>
                <div>
                  <Button href={`./note/${_id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => {
                      removeNote(_id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Badge variant="success">Category - {category}</Badge>
                  <blockquote className="blockquote mb-0">
                    <p>{content}</p>
                    <footer className="blockquote-footer">
                      Created on 23/02/2022
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}
    </MainScreen>
  );
};

export default myNotes;
