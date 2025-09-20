
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Landing Page/Home';
import Navigation from './Navigation/Navigation';
import Time from './Others/Time';
import Pricing from './Pricing/Pricing';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="navigation" element={<Navigation />} />
          <Route path="time" element={<Time />} />
          <Route path="pricing" element={<Pricing  />} />
          <Route path="footer" element={<Footer  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
