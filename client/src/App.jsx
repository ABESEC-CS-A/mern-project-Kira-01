import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Userdashboard from './pages/Userdashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/Notfound';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path= '/about' element={<About />} />
        <Route path= '/contact' element={<Contact />} />
        <Route path= '/userdasboard' element={<Userdashboard/>} />
        <Route path= '/login' element={<Login />} />
        <Route path= '/register' element={<Register />} />
        <Route path= '*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;