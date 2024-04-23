import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Services from '../pages/Services';
import Doctors from '../pages/Doctors';
import DocDetails from '../pages/DocDetails';
import Contact from '../pages/Contact';
function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Doctors" element={<Doctors/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/DocDetails" element={<DocDetails/>}/>
      </Routes>
  )
}

export default Router;