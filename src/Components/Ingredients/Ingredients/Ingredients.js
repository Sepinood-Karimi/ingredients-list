import IngredientsForm from "../IngredientsForm/IngredientsForm";
import Search from "../Search/Search";
import IngredientsList from "../IngredientsList/IngredientsList";
import { useEffect, useState } from "react";
import insertIngredient from "../../../Api/insertIngredient";
import getIngredients from "../../../Api/getIngredients";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients.then((response) => {
      const responseData = response.data;
      const loadedIngredients = [];
      for (const r in responseData) {
        loadedIngredients.push({
          id: responseData[r].id,
          title: responseData[r].title,
          amount: responseData[r].amount,
        });
        setIngredients(loadedIngredients);
      }
    });
  }, []);
  const addIngredientsHandler = (newIngredient) => {
    insertIngredient(newIngredient).then((response) => {
      console.log(response);
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        {
          id: Math.random().toString(),
          title: newIngredient.title,
          amount: newIngredient.amount,
        },
      ]);
    });
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
