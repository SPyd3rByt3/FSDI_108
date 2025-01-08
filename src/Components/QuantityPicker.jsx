import { useState } from 'react';
import "./styles/quantityPicker.css"

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);


    function increase() {
        let value = quantity + 1;
        setQuantity (value);
        // NOTE: the Setter is not immediate. It will be called after the event loop (takes some time)
        console.log(quantity);
    }
    function decrease() {
        if(quantity == 1) return;
        let value = quantity - 1;
        setQuantity (value);
        // NOTE: the Setter is not immediate. It will be called after the event loop (takes some time)
        console.log(quantity);
    }

    return (
        <div className="quantity-picker">
            <button disabled={ quantity == 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;