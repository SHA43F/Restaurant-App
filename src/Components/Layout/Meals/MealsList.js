import MealsListItems from "./MealsListItems";
import classes from './MealsList.module.css'

const MealsList = (props) => {
  return (
      <ul className={classes.ul}>
        {props.dishes.map((dish) => {
          return (
            <MealsListItems
              name={dish.name}
              content={dish.content}
              price={dish.price}
            />
          );
        })}
      </ul>
  );
};

export default MealsList;
