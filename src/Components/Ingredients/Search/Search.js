import Card from "../../UI/Card/Card";

const Search = () => {
  return (
    <section>
      <Card>
        <div>
          <label htmlFor="filter">Filter by Title</label>
          <input id="filter" type="text" />
        </div>
      </Card>
    </section>
  );
};

export default Search;
