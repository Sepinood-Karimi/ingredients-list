import IngredientsForm from "../IngredientsForm/IngredientsForm";
import Search from "../Search/Search";
import IngredientsList from "../IngredientsList/IngredientsList";
import { useState } from "react";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredientsHandler = (newIngredient) => {
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      {
        id: Math.random().toString(),
        title: newIngredient.title,
        amount: newIngredient.amount,
      },
    ]);
  };
  return (
    <div>
      <IngredientsForm onAddIngredient={addIngredientsHandler} />
      <section>
        <Search />
      </section>
      <IngredientsList ingredients={ingredients} />
    </div>
  );
};

export default Ingredients;
