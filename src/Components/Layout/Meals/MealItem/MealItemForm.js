import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input";

const MealItemForm = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
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
      <button className={classes.button} type="submit">
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
