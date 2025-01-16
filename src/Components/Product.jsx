import { useState } from 'react';
import "./styles/product.css";
import QuantityPicker from "./QuantityPicker.jsx";
import { useContext } from "react";
import GlobalContext from "../state/globalContext.js";

function Product(props) {
    const [quantity, setQuantity] = useState(1);
    const globalAdd = useContext(GlobalContext).addProductToCart;

    function onAdd() {
        let fixedProduct = {...props.data};
        fixedProduct.quantity = quantity;
        // console.log("Test");
        globalAdd(fixedProduct);
    }

    function handleQuantity(qty) {
        // console.log(qty);
        setQuantity(qty);
    }
    return (
        <div className="product">
            <img src={props.data.image} alt='' />
            <h3>{props.data.title}</h3>

        
            <p>Price: ${props.data.price}</p>

        <div className="parent">
            <label className="">{(props.data.price * quantity)} </label>
            <label>${props.data.price.toFixed(2)}</label>
        </div>

        <div className="parent">
            <QuantityPicker onChange={handleQuantity} />
            <button className='btn btn-sm btn-primary' onClick={onAdd}>Add</button>
            {/* <button onClick={() => props.onAdd(props.data)}>Add</button> */}
            </div>
        </div>
    )
}
// https://picsum.photos/600
export default Product;