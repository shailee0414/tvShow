import React from "react";
import  {Home }from "../src/components/Home"
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Details from "./components/Details";

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes >
        <Route path="/"   element={<Home/>}/>
        <Route path="/details"   element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
};
export default App;