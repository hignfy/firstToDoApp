import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Heading from "./components/Heading";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <Heading text="To-Do" />
      <ToDoList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
