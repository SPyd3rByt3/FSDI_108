import { useState } from 'react';
import React from 'react';
import './styles/admin.css';

function Admin() {
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code: "", discount: ""
    });


    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({
        title: "", price: "", image: "", category: ""
    });

    function handleCoupon(e) {
        const text = e.target.value;
        const name = e.target.name;

        console.log(name, text);

        let copy = { ...coupon };
        if (name == "code") {
            copy.code = text;
        }
        else if (name == "discount") {
            copy.discount = text;
        }
        setCoupon(copy);
    }

    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.name;

        console.log(name, text);

        let copy = { ...product };
        if (name == "title") {
            copy.title = text;
        }
        else if (name == "price") {
            copy.price = text;
        }
        else if (name == "image") {
            copy.image = text;
        }
        else if (name == "category") {
            copy.category = text;
        }
        setProduct(copy);
    }


    function saveCoupon() {
        console.log(coupon);
        let copy = [ ...allCoupons ];
        copy.push(coupon);
        setAllCoupons(copy);
        // let copy = { ...allCoupons };
        // copy.push(coupon);
        // setAllCoupons(copy);
    }

    function saveProduct() {
        console.log(product);
        let copy = [ ...allProducts ];
        copy.push(product);
        setAllProducts(copy);
    }

    return (
        <div className='admin'>
            <h1>Admin Page</h1>
            <p>Welcome to the Admin page. Here you can manage the application settings.</p>

            <div className="parent">
                <div className='prod-form nice-form'>
                    <h3>Register Products</h3>

                    <div>
                        <label className="form-label">Title:</label>
                        <input type="text" className="form-control" id="title" name="title" onBlur={handleProduct} />
                    </div>
                    <div>
                        <label className="form-label">Image:</label>
                        <input type="text" className="form-control" id="image" name="image" onBlur={handleProduct} />
                    </div>
                    <div>
                        <label className="form-label">Price:</label>
                        <input type="number" className="form-control" id="price" name="price" onBlur={handleProduct} />
                    </div>
                    <div>
                        <label className="form-label">Category:</label>
                        <input type="text" className="form-control" id="category" name="category" onBlur={handleProduct} />
                    </div>

                    <div className='controls'>
                        <button className='btn btn-sm btn-dark' onClick={saveProduct}>Save Product</button>
                    </div>

                    <ul>
                        {allProducts.map(prod => <li>{prod.title} - {prod.price}</li>)}
                    </ul>
                </div>
            </div>
            <div className='coupon-form nice-form'>
                <h3>Register Coupons</h3>

                <div>
                    <label className="form-label">Code:</label>
                    <input type="text" className="form-control" onChange={handleCoupon} name="code" />
                </div>

                <div>
                    <label className="form-label">Discount:</label>
                    <input type="number" className="form-control" onBlur={handleCoupon} name="discount" />
                </div>

                <div className='controls'>
                    <button className='btn btn-sm btn-dark' onClick={saveCoupon}>Save coupon</button>
                </div>

            <ul>
                {allCoupons.map(cp => <li>{cp.code} - {cp.discount}% </li>)}
            </ul>
            
        </div>
    </div>

    );
}

export default Admin;
