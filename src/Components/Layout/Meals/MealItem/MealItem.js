import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.content}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div className={classes.form}>
        <h4 className={classes.label}>Amount</h4>
        <input className={classes.input} type="number" defaultValue="1"/>
        <button className={classes.button}>+Add</button>
      </div>
    </li>
  );
};

export default MealItem;
