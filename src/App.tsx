import './App.css'
import Home from './Home';
import Footer from './Footer';
import Converter from './Converter';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/converter">Converter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/converter" element={<Converter />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
