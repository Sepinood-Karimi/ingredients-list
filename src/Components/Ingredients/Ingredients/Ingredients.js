import IngredientsForm from "../IngredientsForm/IngredientsForm";
import Search from "../Search/Search";
import IngredientsList from "../IngredientsList/IngredientsList";
import { useCallback, useEffect, useMemo, useReducer } from "react";
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

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case "SEND_REQUEST":
      return { ...currentHttpState, loading: true };
    case "SUCCESS_RESPONSE":
      return { ...currentHttpState, loading: false };
    case "ERROR_RESPONSE":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return { loading: false, error: null };
    default:
      throw new Error("we should not reach here!");
  }
};
const Ingredients = () => {
  const [ingredients, dispatchIngredients] = useReducer(ingredientsReducer, []);
  const [httpState, dispatchHttpState] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });

  useEffect(() => {
    dispatchHttpState({ type: "SEND_REQUEST" });
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
          dispatchIngredients({ type: "SET", ingredients: loadedIngredients });
        }
        dispatchHttpState({ type: "SUCCESS_RESPONSE" });
      } else {
        dispatchHttpState({
          type: "ERROR_RESPONSE",
          errorMessage: response.error.message,
        });
      }
    });
  }, []);
  const addIngredientsHandler = (newIngredient) => {
    dispatchHttpState({ type: "SEND_REQUEST" });
    insertIngredient(newIngredient).then((response) => {
      if (response.error === null) {
        const responseData = response.data;
        let newId = "";
        for (const r in responseData) {
          newId = responseData[r].id;
        }
        dispatchIngredients({
          type: "ADD",
          newIngredient: {
            id: newId,
            title: newIngredient.title,
            amount: newIngredient.amount,
          },
        });
        dispatchHttpState({ type: "SUCCESS_RESPONSE" });
      } else {
        dispatchHttpState({
          type: "ERROR_RESPONSE",
          errorMessage: response.error.message,
        });
      }
    });
  };

  const loadIngredientsHandler = useCallback((enteredFilter) => {
    dispatchIngredients({ type: "SET", ingredients: enteredFilter });
  }, []);

  const removeIngredientHandler = useCallback((id) => {
    dispatchHttpState({ type: "SEND_REQUEST" });
    removeIngredient(id).then((response) => {
      if (response.error === null) {
        dispatchIngredients({ type: "REMOVE", id: id });
        dispatchHttpState({ type: "SUCCESS_RESPONSE" });
      } else {
        dispatchHttpState({
          type: "ERROR_RESPONSE",
          errorMessage: response.error.message,
        });
      }
    });
  }, []);

  const closeErrorModalHandler = () => {
    dispatchHttpState({ type: "CLEAR" });
  };

  const ingredientsList = useMemo(() => {
    return (
      <IngredientsList
        ingredients={ingredients}
        onDelete={removeIngredientHandler}
      />
    );
  }, [ingredients, removeIngredientHandler]);

  return (
    <div>
      <IngredientsForm
        onAddIngredient={addIngredientsHandler}
        isLoading={httpState.loading}
      />
      <section>
        <Search onLoadIngredients={loadIngredientsHandler} />
      </section>
      {ingredientsList}
      {httpState.error && (
        <ErrorModal
          error={httpState.error}
          onCloseErrorModal={closeErrorModalHandler}
        />
      )}
    </div>
  );
};

export default Ingredients;
