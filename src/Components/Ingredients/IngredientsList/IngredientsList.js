const IngredientsList = (props) => {
  return (
    <section>
      <h2> Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            <span>{ingredient.title}</span>
            <span>{ingredient.amount}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default IngredientsList;
