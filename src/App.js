// we need to import React to write components, and useState to store information
import React, { useState } from "react";
// grab Food so we can display it and pass it props
import Food from "./Food";
// just in case we need styles
import "./App.css";

// this is what we're calling our component
function App() {
  // states just store information like a variable
  // but instead of changing and acquiring the value with the same name
  // we need to get the value with the getter
  // and set the value with the setter
  const [appetizer, setAppetizer] = useState("bruschetta");
  const [entree, setEntree] = useState("roasted duck carbonara");
  const [dessert, setDessert] = useState("creme brulée");
  const [drink, setDrink] = useState("white wine");
  // we'll pass this state to Food once the order has been submitted
  const [order, setOrder] = useState({});

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
    setOrder(newOrder);
    // cleaning out the form and giving the waiter a new piece of paper to write on
    setAppetizer("");
    setEntree("");
    setDessert("");
    setDrink("");
  };

  // show us some stuff render to the screen please
  return (
    <div className="App">
      <h1>Prix Phoenix</h1>
      {/* we're rendering the Food component to show our order */}
      <Food order={order} />
      {/* when the form's submit event happens, call the waiter! (it's food time)*/}
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
    </div>
  );
}

export default App;
