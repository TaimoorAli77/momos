import React, { Suspense, lazy } from "react";
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Menu from "./components/menu/Menu";
const Home = lazy(() => Promise.resolve(require("./components/Home")));
const Menu = lazy(() => Promise.resolve(require("./components/menu/Menu")));
const App = () => {
  return (
      <BrowserRouter>
      <NavBar home="Home" who="Who we are" food="our Food" menu="menu" order="ORDER NOW"/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index  path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
    
  )
}

export default App
