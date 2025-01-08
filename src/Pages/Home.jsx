import React from 'react';
import './styles/home.css';

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Our Online Store</h1>
                <p>Your one-stop shop for all your needs!</p>
            </header>
            <section className="home-content">
                <h2>Featured Products</h2>
                {/* Add product components or links here */}
            </section>
        </div>
    );
};

export default Home;
