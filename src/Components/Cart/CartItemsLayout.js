import classes from './CartItemsLayout.module.css';

const CartItem = (props) => {
  const price = props.price + "Rs";
  //console.log(price);

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
        <button onClick={props.onRemove}>-</button>
        
      </div>
    </li>
  );
};

export default CartItem;