import Card from "../../UI/Card/Card";
import classnames from "classnames";
import classes from "./IngredientsForm.module.css";

const IngredientsForm = () => {
  return (
    <section className={classnames(classes["form-section"])}>
      <Card>
        <form className={classnames(classes.form)}>
          <div className={classnames(classes["form-input"])}>
            <label htmlFor="tile">Name</label>
            <input type="text" id="title" />
          </div>
          <div className={classnames(classes["form-input"])}>
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" />
          </div>
          <div>
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default IngredientsForm;
