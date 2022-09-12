import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Header from './components/Header';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer';
import Events from './pages/Events';
import Aarambh from './pages/Aarambh';

function App() {

    return (
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/aarambh' element={<Aarambh />} />
      </Routes>
    <Footer />
    </Router>
  );
}

export default App;
