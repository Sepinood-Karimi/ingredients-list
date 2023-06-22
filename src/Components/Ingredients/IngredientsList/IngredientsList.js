import classnames from "classnames";
import classes from "./IngredientsList.module.css";
import TrashcanLogo from "../../../Logo/TrashcanLogo";

const IngredientsList = (props) => {
  return (
    <section className={classnames(classes["ingredients-list"])}>
      <h2> Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            <span> {ingredient.title}</span>
            <span> {ingredient.amount} x </span>
            <TrashcanLogo onClick={props.onDelete.bind(this, ingredient.id)} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default IngredientsList;
