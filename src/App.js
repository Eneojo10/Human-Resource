
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Landing Page/Home';
import Navigation from './Navigation/Navigation';
import Time from './Others/Time';
import Pricing from './Pricing/Pricing';
import Footer from './Footer/Footer';
import Caculator from './Others/Caculator';
import Chatbox from './Components/Chatbox';
import Solutions from './Solutions/Solutions';
import Why from './Components/Why';
import Story from './Components/Story/Story';

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
          <Route path="roi-calculator" element={<Caculator  />} />
          <Route path="solutions/hr-services" element={<Solutions  />} />
          <Route path="why-enesHR" element={<Why  />} />
          <Route path="about-enesHR" element={<Story  />} />
        </Routes>
        <Chatbox />
      </Router>
    </div>
  );
}

export default App;
