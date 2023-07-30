import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LatestCause from './pages/LatestCause';
import SocialCause from './pages/SocialCause';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/> 
      <Route path="/latest-causes" element={<LatestCause/>}/>
      <Route path="/social-events" element={<SocialCause/>}/>  
    </Routes>
  </BrowserRouter>
  );
}

export default App;
