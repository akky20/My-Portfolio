import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import About from './components/About/About';
import OnePage from './components/OnePage/OnePage';

function App() {
  return (
    <div>

        <Routes>
          <Route index path="/" element={<OnePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Portfolio />
        <About />
        <Contact /> */}
    </div>

  );
}

export default App;
