import "./App.css";
import React from "react";
import Header from "./Components/Layout/Header/Header";
import MealsSummary from "./Components/Layout/Meals/MealsSummary";
import MealsList from "./Components/Layout/Meals/MealsList";

function App() {
  const dishes = [
    { name: "Sushi", content: "Finest fish and veggies", price: "22.99" },
    { name: "Schnitzel ", content: "A german specialty!", price: "16.50" },
    { name: "Barbecue Burger", content: "American, raw, meaty", price: "12.99" },
    { name: "Green Bowl", content: "Healthy...and green...", price: "14.80" }
  ];
  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
      <MealsList dishes={dishes}/>
    </React.Fragment>
  );
}

export default App;
