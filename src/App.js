import "./App.css";
import {Fragment , useState} from "react";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Layout/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  const cartState = () =>{
    setCartOpen(!cartOpen)
  }

  return (
    <Fragment>
      {cartOpen && <Cart onCloseCart={cartState} />}
      <Header  onOpenCart={cartState} />
      <Meals />
    </Fragment>
  );
}

export default App;
