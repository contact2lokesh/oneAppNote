import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  createNotesReducer,
  notesListReducer,
  updateNoteReducer,
  DeleteNoteReducer,
} from "./redux/reducers/notesReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  updateUserReducer,
} from "./redux/reducers/userReducer";

const rootReducer = combineReducers({
  notesList: notesListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  createNote: createNotesReducer,
  updateNote: updateNoteReducer,
  deleteNote: DeleteNoteReducer,
  userUpdate: updateUserReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
