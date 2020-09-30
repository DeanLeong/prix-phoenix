import React from "react";

function Food(props) {
  // we receive a prop called order
  // props is an object that holds order, which is an object, which holds properties
  // this means that if we want to access any of the properties we can use dot notation!
  // so we're saying the order property of this Food component has an appetizer for example
  // e.g. props.order.appetizer
  // if we don't an order prop (as in it's not assigned in App), then this component will error out.
  return (
    <ul>
      <li>{props.order.appetizer}</li>
      <li>{props.order.entree}</li>
      <li>{props.order.dessert}</li>
      <li>{props.order.drink}</li>
    </ul>
  );
}

export default Food;
