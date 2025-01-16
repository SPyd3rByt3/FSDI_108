import React from 'react';
import './styles/cart.css';
import { useContext } from 'react';
import GlobalContext from '../state/globalContext';
import { Button } from 'bootstrap/dist/js/bootstrap.min';
// const Cart = () => {}

function Cart() {
    // const user = useContext(GlobalContext).user;
    const cart = useContext(GlobalContext).cart; /** ONLY need the number of cart items HERE */
    
    return (
        <div className="cart">
            <header className="cart-header">
                <h1>Are you sure you have everything you need in your cart?</h1>
                <h3>WE HAVE {cart.length} ITEMS IN YOUR CART</h3>
                <p>Your one-stop shop for all your Organika needs!</p>
            </header>

            <div className="cart-content">
                <ul>
                    {cart.map(prod => 
                        <li className='cart-prod'> 
                        <img src={prod.image} alt={prod.name} />
                            <h6>{prod.title}</h6>
                            <label>#{prod.quantity}</label>
                            <label>${prod.price}</label>
                            <label>${(prod.price * prod.quantity).toFixed(2)}</label>
                            <button className='btn btn-sm btn-danger'>Remove</button>
                        </li>
                    )}
                
                </ul>

                {/* <h2>Ready to go!</h2>
                <h3>WE HAVE {cart.length} ITEMS IN YOUR CART</h3> */}
                {/* Add product components or links here */}
            </div>
        </div>
    );
};

export default Cart;

/**
 * 
 * 1 fix the price to 2 decimals
 * 2 show the total on a label next to price
 * 3 display total with 2 decimals
 * 
 * 4 add a button to Remove at the end of each li
 * 
 * 5 show the image at the left
 */

/**
 * map each obj from cart into a li that displays
 * h6 > title
 * label > #quantity
 * label > $price
 */


/**
 * Create the cart page
 * create a route for it: /cart
 * display a H1 
 * 
 * change the button on navbar for a Link
 * to send the user to the cart page
 * 
 */
