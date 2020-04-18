import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Loading() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Fetching Data</h1>
      </header>
    </div>
  );
}

export default Loading;
