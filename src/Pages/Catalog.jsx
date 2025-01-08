import Product from "../Components/Product";
import "./styles/catalog.css";
import { useState} from 'react';

const dummyData = [
    {
        "title": "Orange",
        "category": "Fruit",
        "price": 12.99,
        "image": "/images/orange.jpg", //add img address from online
        "_id": "1"
    },
    {
        "title": "Jackfruit",
        "category": "Fruit",
        "price": 67.99,
        "image": "/images/jack.webp", //add img address from online
        "_id": "2"
    },
    {
        "title": "Cucumber",
        "category": "Vegetable",
        "price": 6.99,
        "image": "/images/Cuc.webp", //add img address from online
        "_id": "3"
    },
    {
        "title": "Bamboo",
        "category": "Vegetable",
        "price": 4.99,
        "image": "/images/bamboo.webp", //add img address from online
        "_id": "3"
    },
    {
        "title": "Pork",
        "category": "Meat",
        "price": 6.99,
        "image": "/images/pork.webp", //add img address from online
        "_id": "3"
    },
    {
        "title": "Chicken",
        "category": "Meat",
        "price": 9.99,
        "image": "/images/chkn.webp", //add img address from online
        "_id": "3"
    },
    {
        "title": "ball-cap",
        "category": "Merchandise",
        "price": 40.99,
        "image": "/images/cap.avif", //add img address from online
        "_id": "3"
    },
    {
        "title": "T-shirt",
        "category": "Merchandise",
        "price": 20.99,
        "image": "/images/tee.webp", //add img address from online
        "_id": "3"
    },
];

const dummyCategories = ["Fruit", "Vegetable", "Meat", "Merchandise"];

function Catalog() {
const [allProducts, setAllProducts] = useState(dummyData);
const [categories, setCategories] = useState(dummyCategories);

    return (
        <div className="catalog">
            <h1>Check out our amazing catalog</h1>

            <div className="filters">
            { categories?.map(cat => <button className='btn btn-sm btn-danger'>{cat}</button>)}
            </div>

            {
                allProducts?.map( prod => <Product data={prod} /> )
            }
        </div>
    );
}
export default Catalog;