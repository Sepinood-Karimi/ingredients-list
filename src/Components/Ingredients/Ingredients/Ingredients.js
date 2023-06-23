import IngredientsForm from "../IngredientsForm/IngredientsForm";
import Search from "../Search/Search";
import IngredientsList from "../IngredientsList/IngredientsList";
import { useCallback, useEffect, useState } from "react";
import insertIngredient from "../../../Api/insertIngredient";
import getIngredients from "../../../Api/getIngredients";
import removeIngredient from "../../../Api/removeIngredient";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
        setIsLoading(false);
      }
    });
  }, []);
  const addIngredientsHandler = (newIngredient) => {
    setIsLoading(true);
    insertIngredient(newIngredient).then((response) => {
      const responseData = response.data;
      let newId = "";
      for (const r in responseData) {
        newId = responseData[r].id;
      }
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        {
          id: newId,
          title: newIngredient.title,
          amount: newIngredient.amount,
        },
      ]);
      setIsLoading(false);
    });
  };

  const loadIngredientsHandler = useCallback((enteredFilter) => {
    setIngredients(enteredFilter);
  }, []);

  const removeIngredientHandler = (id) => {
    setIsLoading(true);
    removeIngredient(id).then((response) => {
      setIngredients((prevIngredients) => {
        prevIngredients.filter((ingredient) => ingredient.id !== id);
        setIsLoading(false);
      });
    });
  };

  return (
    <div>
      <IngredientsForm
        onAddIngredient={addIngredientsHandler}
        isLoading={isLoading}
      />
      <section>
        <Search onLoadIngredients={loadIngredientsHandler} />
      </section>
      <IngredientsList
        ingredients={ingredients}
        onDelete={removeIngredientHandler}
      />
    </div>
  );
};

export default Ingredients;
