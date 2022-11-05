import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input";
import { useContext } from "react";
import CartContext from "../../../Store/cart-context";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  console.log("reintialized", cartCtx);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount_" +props.id).value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
  };

  return (
    <form className={classes.form}>
      {console.log("inside render", cartCtx.items)}
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button} onClick={onSubmitHandler}>
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
