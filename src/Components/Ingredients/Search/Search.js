import React, { useRef } from "react";
import Card from "../../UI/Card/Card";
import classnames from "classnames";
import classes from "./Search.module.css";
import { useEffect, useState } from "react";
import getSpecificIngredient from "../../../Api/getSpecificIngredient";

const Search = React.memo((props) => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const { onLoadIngredients } = props;
  const enteredFilterRef = useRef();
  const filterChangeHandler = (event) => {
    setEnteredFilter(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === enteredFilterRef.current.value) {
        getSpecificIngredient(enteredFilter).then((response) => {
          if (response.data.length !== 0) {
            onLoadIngredients(response.data);
          }
        });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, onLoadIngredients]);

  return (
    <section>
      <Card>
        <div className={classnames(classes["search-form"])}>
          <label htmlFor="filter">Filter by Title</label>
          <input
            id="filter"
            type="text"
            value={enteredFilter}
            onChange={filterChangeHandler}
            ref={enteredFilterRef}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
