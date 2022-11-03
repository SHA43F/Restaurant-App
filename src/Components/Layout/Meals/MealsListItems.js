const MealsListItems = (props) => {
  return (
    <section>
      <h3>{props.name}</h3>
      <p>{props.content}</p>
      <h2>${props.price}</h2>
      <hr></hr>
    </section>
  );
};

export default MealsListItems;
