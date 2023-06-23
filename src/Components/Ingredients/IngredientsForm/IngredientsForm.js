import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import classnames from "classnames";
import classes from "./IngredientsForm.module.css";
import Loading from "../../UI/LoadingIndicator/Loading";

const IngredientsForm = React.memo((props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  };

  return (
    <section className={classnames(classes["form-section"])}>
      <Card>
        <form className={classnames(classes.form)} onSubmit={submitHandler}>
          <div className={classnames(classes["form-input"])}>
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className={classnames(classes["form-input"])}>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className={classnames(classes.actions)}>
            <button type="submit">Add Ingredient</button>
            {props.isLoading && <Loading />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientsForm;
