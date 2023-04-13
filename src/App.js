import React from "react";
import "./App.css";
import HomeScreen from "./Home/HomeScreen";

import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Sign from "./Sign/Sign";


function App() {
  return (
    <div className="App">
   <Routes>
   <Route path="/" element={<Login/>}/>
    <Route path="/movies" element={<HomeScreen/>}/>

   </Routes>
 
    </div>
  );
}

export default App;
