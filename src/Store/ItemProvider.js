import React, { useReducer } from "react";
import ItemContext from "./ItemContext";

const defaultState = {
  inventoryItems: [],
  cartItems: [],
  totalAmount: 0,
};

const itemReducer = (state, action) => {

//console.log("state",state);
  if (action.type === "inventory") {
    //console.log("invetory item adding", action.item, Math.random());
    const items = state.inventoryItems;
    const upddatedItems = [...items, action.item];
    return { ...state, inventoryItems: upddatedItems };
  };
  if (action.type === "cart") {

    //.log(state.totalAmount)
    const updatedTotalAmount = state.totalAmount + action.item.price;

    const existedCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.item.id
    );
    const existedInventoryIndex = state.inventoryItems.findIndex(
        (item) => item.id === action.item.id
    );

    const existedCartItem = state.cartItems[existedCartItemIndex];
    const existedInventoryItem = state.inventoryItems[existedInventoryIndex];

    let updatedItems;
    let updatedInventoryItems = state.inventoryItems;

    const updatedInventoryItem = {...existedInventoryItem, quantity : +existedInventoryItem.quantity -1 };

    //console.log("inside cart ",updatedInventoryItem);

    updatedInventoryItems[existedInventoryIndex] = updatedInventoryItem;

    if (existedCartItem) {
      const updatedItem = {
        ...existedCartItem,
        quantity: +existedCartItem.quantity +1
      };
      updatedItems = state.cartItems;
      updatedItems[existedCartItemIndex] = updatedItem;
      //console.log("item Already exist");
    } else {
      updatedItems = state.cartItems.concat(action.item);
      //console.log("new item");
    }
    return { inventoryItems:updatedInventoryItems, cartItems: updatedItems, totalAmount: updatedTotalAmount };
  };
  if(action.type === 'remove'){

    const existedCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    const existedInventoryIndex = state.inventoryItems.findIndex(
        (item) => item.id === action.id
    );

    const existedCartItem = state.cartItems[existedCartItemIndex];
    const existedInventoryItem = state.inventoryItems[existedInventoryIndex];

    let updatedItems;
    let updatedInventoryItems = state.inventoryItems;

    const updatedInventoryItem = {...existedInventoryItem, quantity : +existedInventoryItem.quantity +1 };

    //console.log("inside cart ",updatedInventoryItem);

    updatedInventoryItems[existedInventoryIndex] = updatedInventoryItem;


    const updatedItem = {
      ...existedCartItem,
      quantity: +existedCartItem.quantity -1
    };
    updatedItems = state.cartItems;
    updatedItems[existedCartItemIndex] = updatedItem;

    if(updatedItems[existedCartItemIndex].quantity === 0){
      updatedItems.splice(existedCartItemIndex,1);
    };
    const updatedTotalAmount = state.totalAmount - updatedItem.price;

    return { inventoryItems:updatedInventoryItems, cartItems: updatedItems, totalAmount: updatedTotalAmount };

  };
  return defaultState;
};

const ItemProvider = (props) => {
  const [itemState, dispatchItemAction] = useReducer(itemReducer, defaultState);

  const addItemToInventoryHandler = (item) => {
    dispatchItemAction({
      type: "inventory",
      item: item,
    });
  };
  const addItemToCartHandler = (item) => {
    dispatchItemAction({
      type: "cart",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    //console.log('cart item need to removed',id);
    dispatchItemAction({
      type: 'remove',
      id: id
    });
  };


  const context = {
    inventoryItems: itemState.inventoryItems,
    cartItems: itemState.cartItems,
    totalAmount: itemState.totalAmount,
    addItemToInvetory: addItemToInventoryHandler,
    additemToCart: addItemToCartHandler,
    removeItemFromCart :removeItemFromCartHandler
  };

  return (
    <ItemContext.Provider value={context}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
