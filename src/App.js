import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Food from './components/Food';
import Menu from './components/Menu';
import Who from './components/Who';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/who" element={<Who />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
    
    </React.Fragment>
  )
}

export default App
