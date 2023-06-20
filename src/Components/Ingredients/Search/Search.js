import Card from "../../UI/Card/Card";
import classnames from "classnames";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <section className={classnames(classes.search)}>
      <Card>
        <div className={classnames(classes["search-form"])}>
          <label htmlFor="filter">Filter by Title</label>
          <input id="filter" type="text" />
        </div>
      </Card>
    </section>
  );
};

export default Search;
