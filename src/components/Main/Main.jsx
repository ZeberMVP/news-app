import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Form from './Form'; 
import Home from './Home'; 
import ListNews from './ListNews'; 

class Main extends Component {
  render() {
    return (
      <main className={"main"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<ListNews />} />
        </Routes>
      </main>
    );
  }
}

export default Main;
