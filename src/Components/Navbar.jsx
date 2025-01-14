import { useContext } from 'react';
import GlobalContext from '../state/globalContext';
import './styles/navbar.css';
import { Button } from 'bootstrap/dist/js/bootstrap.min';

import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom'; 

function Navbar() {

const user = useContext(GlobalContext).user;
const cart = useContext(GlobalContext).cart;
// const logout = useContext(GlobalContext).logout;
    return (
        <div>
            <nav>
                <div className="logo">
                    <a href="/">Home   </a>
                    <a href="/catalog">Catalog    </a>
                    <a href="/contact">Contact   </a>
                    <a href="/admin">Admin   </a>
                    <a href="/cart">Cart  </a>
                </div>
                {/* <div className="nav-right"></div> */}

            <div className="d-flex" role="search">
                <button className='btn btn-outline-dark'>{user.name}</button>

            <Link className='btn btn-outline-success' to="/cart">
                {cart.length}
            </Link>
                
            </div>
            </nav>
        </div>
    );
}

export default Navbar;