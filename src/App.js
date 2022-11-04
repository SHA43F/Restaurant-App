import "./App.css";
import {Fragment , useState} from "react";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Layout/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  const openCartFun = () =>{
    setCartOpen(!cartOpen)
  }

  return (
    <Fragment>
      {cartOpen && <Cart onCloseHandler={openCartFun} />}
      <Header  openCart={openCartFun} />
      <Meals />
    </Fragment>
  );
}

export default App;
