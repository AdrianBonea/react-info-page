import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppComponent from "./AppComponent";

function App() {
  return (
    <div>
      <AppComponent />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
