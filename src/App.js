import "./App.css";
import React from "react";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Layout/Meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Meals />
    </React.Fragment>
  );
}

export default App;
