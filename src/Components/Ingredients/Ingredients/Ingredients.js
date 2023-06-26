import IngredientsForm from "../IngredientsForm/IngredientsForm";
import Search from "../Search/Search";
import IngredientsList from "../IngredientsList/IngredientsList";
import { useCallback, useEffect, useReducer, useState } from "react";
import insertIngredient from "../../../Api/insertIngredient";
import getIngredients from "../../../Api/getIngredients";
import removeIngredient from "../../../Api/removeIngredient";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const ingredientsReducer = (currentIngredientsState, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredientsState, action.newIngredient];
    case "REMOVE":
      return currentIngredientsState.filter(
        (ingredient) => ingredient.id !== action.id
      );
    default:
      throw new Error("we should not be here!");
  }
};
const Ingredients = () => {
  // const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ingredients, dispatchIngredients] = useReducer(ingredientsReducer, []);

  useEffect(() => {
    setIsLoading(true);
    getIngredients().then((response) => {
      if (response.error === null) {
        const responseData = response.data;
        const loadedIngredients = [];
        for (const r in responseData) {
          loadedIngredients.push({
            id: responseData[r].id,
            title: responseData[r].title,
            amount: responseData[r].amount,
          });
          // setIngredients(loadedIngredients);
          dispatchIngredients({ type: "SET", ingredients: loadedIngredients });
        }
      } else {
        setError(response.error);
      }
      setIsLoading(false);
    });
  }, []);
  const addIngredientsHandler = (newIngredient) => {
    setIsLoading(true);
    insertIngredient(newIngredient).then((response) => {
      if (response.error === null) {
        const responseData = response.data;
        let newId = "";
        for (const r in responseData) {
          newId = responseData[r].id;
        }
        // setIngredients((prevIngredients) => [
        //   ...prevIngredients,
        //   {
        //     id: newId,
        //     title: newIngredient.title,
        //     amount: newIngredient.amount,
        //   },
        // ]);
        dispatchIngredients({
          type: "ADD",
          newIngredient: {
            id: newId,
            title: newIngredient.title,
            amount: newIngredient.amount,
          },
        });
      } else {
        setError(response.error);
      }
      setIsLoading(false);
    });
  };

  const loadIngredientsHandler = useCallback((enteredFilter) => {
    // setIngredients(enteredFilter);
    dispatchIngredients({ type: "SET", ingredients: enteredFilter });
  }, []);

  const removeIngredientHandler = (id) => {
    setIsLoading(true);
    removeIngredient(id).then((response) => {
      if (response.error === null) {
        // setIngredients((prevIngredients) => {
        //   return prevIngredients.filter((ingredient) => ingredient.id !== id);
        // });
        dispatchIngredients({ type: "REMOVE", id: id });
        setIsLoading(false);
      } else {
        setError(response.error);
      }
    });
  };

  const closeErrorModalHandler = () => {
    setError(null);
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
      {error && (
        <ErrorModal error={error} onCloseErrorModal={closeErrorModalHandler} />
      )}
    </div>
  );
};

export default Ingredients;
