import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import FetchRandomUser from "./components/FetchRandomUser";

export default function App() {

    return(
    <Router>
      <Routes>
        <Route path='/' element={<FetchRandomUser />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
      </Routes>
    </Router>
  )
}

