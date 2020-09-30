import React, { useState } from "react";

function Form(props) {
  // states just store information like a variable
  // but instead of changing and acquiring the value with the same name
  // we need to get the value with the getter
  // and set the value with the setter
  const [appetizer, setAppetizer] = useState("bruschetta");
  const [entree, setEntree] = useState("roasted duck carbonara");
  const [dessert, setDessert] = useState("creme brulée");
  const [drink, setDrink] = useState("white wine");

  // we always get the free event parameter with onSomething (i.e. event listeners)
  const callWaiter = (event) => {
    // prevent the page refresh with query parameters
    event.preventDefault();
    // here we're collecting information to give to our "waiter" (i.e. the Food component)
    const newOrder = {
      appetizer,
      entree,
      dessert,
      drink,
    };
    // newOrder is our new order
    props.setOrder(newOrder);
    // cleaning out the form and giving the waiter a new piece of paper to write on
    setAppetizer("");
    setEntree("");
    setDessert("");
    setDrink("");
  };

  return (
    <form onSubmit={callWaiter}>
      {/* labels match with inputs (PB&J) label's htmlFor should be input's name */}
      <label htmlFor="appetizer">Appetizer:</label>
      <input
        name="appetizer"
        value={appetizer}
        onChange={(event) => setAppetizer(event.target.value)}
      />
      <label htmlFor="entree">Entree:</label>
      <input
        name="entree"
        value={entree}
        onChange={(event) => setEntree(event.target.value)}
      />
      <label htmlFor="dessert">Dessert:</label>
      <input
        name="dessert"
        value={dessert}
        onChange={(event) => setDessert(event.target.value)}
      />
      <label htmlFor="drink">Drink:</label>
      {/* input.addEventListener('change', doSomething);*/}
      <input
        name="drink"
        placeholder="Put your drink here."
        value={drink}
        onChange={(event) => setDrink(event.target.value)}
      />
      {/* when we hit this button, the submit event of the form that the button is in will be triggered */}
      <button type="submit">OH WAIIIIIIITER</button>
    </form>
  );
}

export default Form;
