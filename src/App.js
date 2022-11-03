import "./App.css";
import React from "react";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Layout/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <Meals />
    </React.Fragment>
  );
}

export default App;
