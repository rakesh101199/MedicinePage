import React ,{useRef , useContext} from "react";
import ItemContext from "../Store/ItemContext";
import classes from "./AddProduct.module.css";
const AddProduct = () => {
    const items = useContext(ItemContext);
    const nameRef = useRef();
    const desRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const item ={
        name : nameRef.current.value,
        des : desRef.current.value,
        price : +priceRef.current.value,
        quantity : +quantityRef.current.value,
        id:Math.random()
        };

       // console.log('submitted ');
        items.addItemToInvetory(item);

        nameRef.current.value='';
        desRef.current.value='';
        priceRef.current.value='';
        quantityRef.current.value='';
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div>
            <label>Medicine Name : </label>
            <br />
            <input type="text" ref={nameRef} required></input>
            </div>
            <div>
            <label>Description : </label>
            <br />
            <input type="text" ref={desRef} required></input>
            </div>
            <div>
            <label>Price : </label>
            <br />
            <input type="number" ref={priceRef} required min="0" step="0.1"></input>
            </div>
            <div>
            <label>Quantity Available : </label>
            <br />
            <input type="number" ref={quantityRef} required min="0" step="1"></input>
            </div>
            <button>AddProduct</button>
        </form>
    );
};


export default AddProduct;