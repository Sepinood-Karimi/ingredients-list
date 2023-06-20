import Card from "../../UI/Card/Card";

const IngredientsForm = () => {
  return (
    <section>
      <Card>
        <form>
          <div>
            <label htmlFor="tile">Name</label>
            <input type="text" id="title" />
          </div>
          <div>
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
