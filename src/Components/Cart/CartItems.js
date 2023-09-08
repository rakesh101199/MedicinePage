import React, { useContext } from "react";
import ItemContext from "../../Store/ItemContext";
import Modal from "../../UI/Modal";
import CartItemsLayout from "./CartItemsLayout";
import classes from "./CartItems.module.css"

const CartItems = (props) => {
  const cartCtx = useContext(ItemContext);


  const cartItemRemoveHandler = id => {
    cartCtx.removeItemFromCart(id);
  };

  const cartItems = cartCtx.cartItems.map((item) => (
    <CartItemsLayout
      key={item.id}
      des={item.des}
      price={item.price}
      quantity={item.quantity}
      name={item.name}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));


  const totalAmount= cartCtx.totalAmount + "Rs";

  return (
    <Modal onClick={props.onClick}>
      <ul  className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClick}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default CartItems;
