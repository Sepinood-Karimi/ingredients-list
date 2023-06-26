import IngredientsForm from "../IngredientsForm/IngredientsForm";
import Search from "../Search/Search";
import IngredientsList from "../IngredientsList/IngredientsList";
import { useCallback, useEffect, useState } from "react";
import insertIngredient from "../../../Api/insertIngredient";
import getIngredients from "../../../Api/getIngredients";
import removeIngredient from "../../../Api/removeIngredient";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
          setIngredients(loadedIngredients);
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
        setIngredients((prevIngredients) => [
          ...prevIngredients,
          {
            id: newId,
            title: newIngredient.title,
            amount: newIngredient.amount,
          },
        ]);
      } else {
        setError(response.error);
      }
      setIsLoading(false);
    });
  };

  const loadIngredientsHandler = useCallback((enteredFilter) => {
    setIngredients(enteredFilter);
  }, []);

  const removeIngredientHandler = (id) => {
    setIsLoading(true);
    removeIngredient(id).then((response) => {
      if (response.error === null) {
        setIngredients((prevIngredients) => {
          return prevIngredients.filter((ingredient) => ingredient.id !== id);
        });
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
