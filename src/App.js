import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Catalog from './Pages/Catalog';
import Home from './Pages/Home';
// import Footer from './Components/styles/footer';

// import Home from './pages/Home';

import "bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>greetings world from React!</h1>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" component={Catalog} />
      </Switch>

      <Footer></Footer>
    </div>
    );
  }

export default App;
// <input type="text" value={name} onChange={handleChange} />
// <button onClick={handleClick}>Click me</button>
// <p>Count: {count}</p>  
// <button onClick={handleClick}>Click me</button>
// <img> src={logo} alt="logo" />
