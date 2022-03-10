import React,{useEffect} from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom";
import MainScreen from "../../mainScreen";
import { useDispatch, useSelector } from "react-redux";
import { notesList, deleteNote } from "../../../redux/actions/notesAction";
import Loading from "../../loading";
import "./myNotes.css";
import ErrorMessage from "../../errorMessage";

const MyNotes = ({search}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const listOfNotes = useSelector((state)=>state.notesList);
  const {loading, notes, error} = listOfNotes;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const getDeleteNote = useSelector((state) => state.deleteNote);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = getDeleteNote;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNote(id));
    }
    navigate("/mynotes");
  };

  useEffect(()=>{
    dispatch(notesList());
  }, [dispatch]); 

  useEffect(()=>{
    dispatch(notesList());
    if(!userInfo){
      navigate("/");
    }
  }, [dispatch, successDelete]);

  return (
    // <div>myNotes</div>
    <MainScreen title={`Welcome back ${userInfo && userInfo.name}`}>
      <Link to="/createnote">
        <Button style={{ marginLeft: "10px", marginBottom: "6px" }} size="lg ">
          Create New Note
        </Button>
      </Link>
      {errorDelete && <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>}
      {loadingDelete && <Loading/>}
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading/>}
      {notes && notes.reverse().filter((filteredNote) =>
            filteredNote.title.toLowerCase().includes(search.toLowerCase())
          ).map((note) => {
        const { _id, title, content, category, createdAt } = note;
        return (
          <Accordion key={_id}>
            <Card style={{ margin: "10px" }}>
              <Card.Header style={{ display: "flex" }}>
                <span className="titleName">
                  <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                    {title}
                  </Accordion.Toggle>
                </span>
                <div>
                  <Button href={`/note/${_id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => {deleteHandler(_id)}}>
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
                     Created on {":- "}
                     <cite title="Source Title">
                       {createdAt.substring(0, 10)}
                     </cite>
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

export default MyNotes;
