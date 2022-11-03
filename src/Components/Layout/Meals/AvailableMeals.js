import classes from "./AvailableMeals.module.css";
import Card from "../../UI/Card";
import MealItem from "./MealItem/MealItem";

const dishes = [
  { name: "Sushi", content: "Finest fish and veggies", price: "22.99" },
  { name: "Schnitzel ", content: "A german specialty!", price: "16.50" },
  { name: "Barbecue Burger", content: "American, raw, meaty", price: "12.99" },
  { name: "Green Bowl", content: "Healthy...and green...", price: "14.80" },
];

const AvailableMeals = () => {
  const dishList = dishes.map((dish) => (
    <MealItem
      key={dish.name}
      name={dish.name}
      content={dish.content}
      price={dish.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{dishList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
