import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import React, { useContext } from "react";
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalCartAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const orderButton = cartCtx.items.length > 0;
  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={onAddHandler.bind(null, item)}
          onRemove={onRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {CartItems}
      <div className={classes.total}>
        <span>Amount</span>
        <span>{totalCartAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {orderButton && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
