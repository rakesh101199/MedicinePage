import React from 'react';
import classes from './InventoryItem.module.css';

const InventoryItem = (props) => {
    const price = props.price + "Rs";

      // const [showButton , setShowButton] = useState(false);

      // if(props.quantity === 0){
      //     setShowButton(true);
      // };
    let showButton = false;
    if(props.quantity === 0){
      showButton = true;
    };


  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span>{props.des}</span>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onAdd} disabled={showButton}>+Add</button>
        {showButton && <div>Out Of Stock</div>}
      </div>
    </li>
  );
};

export default InventoryItem;