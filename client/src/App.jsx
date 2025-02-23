import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSignup from "./Pages/LoginSignup";
import Home from "./Pages/Home";
import Tasks from "./Pages/Tasks";
import Dashboard from "./Pages/Dashboard";


function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginSignup/>}/>
            <Route path="/tasks" element={<Tasks/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
