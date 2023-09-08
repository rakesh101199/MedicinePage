import React from "react";
import classes from "./CartItems.module.css";

const Cart = (props) => {
  return (
    <div className={classes.cart}>
      <button onClick={props.onClick}>Cart</button>
    </div>
  );
};

export default Cart;
