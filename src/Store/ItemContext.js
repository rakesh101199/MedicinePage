import React from "react";



const ItemContext = React.createContext({
    inventoryItems : [],
    totalAmount : 0,
    cartItems : [],
    addItemToInvetory: (item) => {},
    additemToCart:(item) =>{},
    removeItemFromCart : (id) => {}

});

export default ItemContext;