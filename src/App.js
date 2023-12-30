import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import About from './components/About/About';

function App() {
  return (
    <div>
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
