import React, { useContext } from "react";
import ItemContext from "../../Store/ItemContext";
import InventoryItem from "./InventoryItem";

const Inventory = () => {
  const itemsList = useContext(ItemContext);

  const additemHandler = (item) =>{
    const Item = {...item,quantity:1};
   // console.log('Item passing to add to the cart',Item);
    itemsList.additemToCart(Item);
  };
  const items = itemsList.inventoryItems;
  //console.log(items);

  const invItems = items.map(item => (
    <InventoryItem
      key={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      des={item.des}
      onAdd={additemHandler.bind(null,item)}
    />
  ));

  return <ul>{invItems}</ul>;
};

export default Inventory;
