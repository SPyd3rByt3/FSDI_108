import './styles/navbar.css';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <a href="/">Home   </a>
                    <a href="/catalog">Catalog    </a>
                    <a href="/contact">Contact   </a>
                    <a href="/admin">Admin   </a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;