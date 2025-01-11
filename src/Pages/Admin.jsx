import React from 'react';
import './styles/admin.css';

function Admin() {
    return (
        <div className='admin'>
            <h1>Admin Page</h1>
                <p>Welcome to the Admin page. Here you can manage the application settings.</p>

            <div className="parent">
                <div className='prod-form nice-form'>
                    <h3>Register Products</h3>

                    <div>
                        <label className="form-label">Title:</label>
                        <input type="text" className="form-control" id="title" name="title"/>
                    </div>
                    <div>
                        <label className="form-label">Image:</label>
                        <input type="text" className="form-control" id="title" name="title"/>
                    </div>
                    <div>
                        <label className="form-label">Price:</label>
                        <input type="text" className="form-control" id="title" name="title"/>
                    </div>
                    <div>
                        <label className="form-label">Category:</label>
                        <input type="text" className="form-control" id="title" name="title"/>
                    </div>
                </div>
            </div>
            <div className='coupon-form'>
                <h3>Register Coupons</h3>

                <div>
                        <label className="form-label">Code:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Discount:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className='controls'>
                        <button className='btn btn-sm btn-dark'>Save coupon</button>
                    </div>
            </div>
        </div>

    );
}

export default Admin;


/**
 * Coupon code:
 * code: string
 * discount: number
 */

/**
 * Product:
 * 
 * title
 * image
 * price
 * category
 * 
 */