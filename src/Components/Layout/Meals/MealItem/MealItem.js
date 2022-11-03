import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.content}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
    </li>
  );
};

export default MealItem;
