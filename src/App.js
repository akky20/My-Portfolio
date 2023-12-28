import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Nav/Nav';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import About from './components/About/About';

function App() {
  return (
    <div>
      {/* </> */}
      {/* <Home/> */}
      {/* <Navbar /> */}

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>

  );
}

export default App;
