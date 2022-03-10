import React, { useState } from 'react';
import './App.css';
import  Header  from './components/screens/header/header';
import Footer from './components/screens/footer/footer';
import LandingPage from './components/screens/landingPage/landingPage';
import MyNotes from './components/screens/myNotes/myNotes';
import { Route, Routes } from "react-router-dom";
import LoginScreen  from './components/screens/login/loginScreen';
import RegisterScreen  from './components/screens/register/registerScreen';
import NoteCreate from "./components/screens/createNote/noteCreate"
import  NoteUpdate  from './components/screens/createNote/noteUpdate';
import ProfileScreen from './components/screens/profileScreen/profileScreen';


const App = ()=>{
  const [search, setSearch] = useState('');
  return (
    <>
    <Header setSearch={setSearch}/>
    <main>
    <Routes>
     <Route exact path="/" element={<LandingPage />} />
     <Route exact path="/login" element={<LoginScreen />} />
     <Route exact path="/register" element={<RegisterScreen />} />
     <Route exact path="/profile" element={<ProfileScreen />} />
     <Route exact path="/createnote" element={<NoteCreate />} />
     <Route exact path="/note/:id" element={<NoteUpdate />} />
     <Route exact path="/mynotes" element={<MyNotes search={search} />} />
    </Routes>
    </main>
     <Footer/>
    </>
  );
}

export default App;
