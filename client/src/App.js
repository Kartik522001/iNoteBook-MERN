import React from 'react';
import About from './compontents/About';
import './App.css';
import NoteState from './context/notes/NoteState';
import { Route, Routes } from 'react-router-dom';
import Navbar from './compontents/Navbar';
import Alert from './compontents/Alert';
import Signup from './compontents/signup';
import Login from './compontents/Login';
import Home from './compontents/Home';


function App() {
  return (
    <>
      <NoteState>
        <div className="container">
          <Navbar />
          <Alert message="this is amazing React course" />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
