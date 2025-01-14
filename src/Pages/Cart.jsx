import React from 'react';
import './styles/cart.css';

// const Cart = () => {}

function Cart() {
    return (
        <div className="cart">
            <header className="cart-header">
                <h1>Are you sure you have everything you need in your cart?</h1>
                <p>Your one-stop shop for all your Organika needs!</p>
            </header>
            <section className="cart-content">
                <h2>Ready to go!</h2>
                {/* Add product components or links here */}
            </section>
        </div>
    );
};

export default Cart;



/**
 * Create the cart page
 * create a route for it: /cart
 * display a H1 
 * 
 * change the button on navbar for a Link
 * to send the user to the cart page
 * 
 */
