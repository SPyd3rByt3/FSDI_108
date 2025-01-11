import "./styles/product.css";
import QuantityPicker from "./QuantityPicker.jsx";

function Product(props) {
    return (
        <div className="product">
            <img src={props.data.image} alt='' />
            <h3>{props.data.title}</h3>

        
            <p>Price: ${props.data.price}</p>
        <div className="parent">
            <label className="">$99.99</label>
            <label>${props.data.price}</label>
        </div>

            <QuantityPicker />
        </div>
    )
}
// https://picsum.photos/600
export default Product;