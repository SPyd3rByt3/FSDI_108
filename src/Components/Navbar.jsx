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
                    <Link to="/">Home   </Link>
                    <Link to="/catalog">Catalog    </Link>
                    <Link to="/contact">Contact   </Link>
                    <Link to="/admin">Admin   </Link>
                    <Link to="/cart">Cart  </Link>
                </div>
                {/* <div className="nav-right"></div> */}

            <div className="d-flex" role="search">
                <button className='btn btn-outline-dark btn-user'>{user.name}</button>

            <Link className='btn btn-outline-success' to="/cart">
        <span class="badge rounded-pill text-bg-warning">{cart.length}</span>
            </Link>

            </div>
            </nav>
        </div>
    );
}

export default Navbar;