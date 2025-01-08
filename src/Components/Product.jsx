import "./styles/product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
    return (
        <div className="product">
            <img src={props.data.image} alt='' />
            <h3>{props.data.title}</h3>

            <label>$99.99</label>
            <label>${props.data.price}</label>

            <QuantityPicker />
        </div>
    )
}
// https://picsum.photos/600
export default Product;