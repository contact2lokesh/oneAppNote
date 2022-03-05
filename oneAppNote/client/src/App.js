import React from 'react';
import './App.css';
import  Header  from './components/header/header';
import Footer from './components/footer/footer';
import LandingPage from './components/screens/landingPage/landingPage';
import MyNotes from './components/screens/myNotes/myNotes';
import { Route, Routes } from "react-router-dom";
import LoginScreen  from './components/login/loginScreen';
import  RegisterScreen  from './components/register/registerScreen';


const App = ()=>{
  return (
    <>
    <Header/>
    <main>
    <Routes>
     <Route exact path="/" element={<LandingPage />} />
     <Route exact path="/login" element={<LoginScreen />} />
     <Route exact path="/register" element={<RegisterScreen />} />
     <Route exact path="/mynotes" element={<MyNotes />} />
    </Routes>
    </main>
     <Footer/>
    </>
  );
}

export default App;
