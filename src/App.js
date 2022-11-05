import "./App.css";
import { useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Layout/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const cartState = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <CartProvider>
      {cartOpen && <Cart onCloseCart={cartState} />}
      <Header onOpenCart={cartState} />
      <Meals />
    </CartProvider>
  );
}

export default App;
