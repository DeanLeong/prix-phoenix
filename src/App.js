// we need to import React to write components, and useState to store information
import React, { useState } from "react";
// grab Food so we can display it and pass it props
import Food from "./Food";
import Form from "./Form";
// just in case we need styles
import "./App.css";

// this is what we're calling our component
function App() {
  // we'll pass this state to Food once the order has been submitted
  const [order, setOrder] = useState({});

  // show us some stuff render to the screen please
  return (
    <div className="App">
      <h1>Prix Phoenix</h1>
      {/* we're rendering the Food component to show our order */}
      <Food order={order} />
      <Form setOrder={setOrder} />
      {/* when the form's submit event happens, call the waiter! (it's food time)*/}
    </div>
  );
}

export default App;
