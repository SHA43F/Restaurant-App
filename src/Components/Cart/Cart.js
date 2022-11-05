import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import React, { useContext } from "react";
import CartContext from "../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <React.Fragment>
          <li key={item.id}>{item.name}</li>
          <div className={classes.total}>
            <span>Amount</span>
            <span>${item.price}</span>
          </div>
        </React.Fragment>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {CartItems}
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
