import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Catalog from './Pages/Catalog';
import Home from './Pages/Home';
import About from './Pages/About';
import Admin from './Pages/Admin';
// import Footer from './Components/styles/footer';

// import Home from './pages/Home';

import "bootstrap/dist/css/bootstrap.min.css";
import './Pages/styles/about.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <h1>greetings world from React!</h1>

        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
// <input type="text" value={name} onChange={handleChange} />
// <button onClick={handleClick}>Click me</button>
// <p>Count: {count}</p>  
// <button onClick={handleClick}>Click me</button>
// <img> src={logo} alt="logo" />
