import React ,{useState} from "react";
import ItemProvider from "./Store/ItemProvider";
import AddProduct from "./Components/AddProduct";
import Cart from "./Components/Cart/Cart";
import CartItems from "./Components/Cart/CartItems";
import Inventory from "./Components/InventoryItems/Inventory";




const App = () => {
  const [showCart , setShowCart] = useState(false);

  const cartShowHandler = () => {
    //console.log('show');
    setShowCart(true);
  };

  const cartCloseHandler = () => {
    setShowCart(false);
  };




  return (
    <ItemProvider>
      <Cart onClick={cartShowHandler}/>
      { showCart && <CartItems onClick={cartCloseHandler} /> }
      <AddProduct/>
      <Inventory />
    </ItemProvider>
  );
}

export default App;
