import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import SingleService from './pages/SingleService';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Footer from './components/footer';
import Error from './pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="pageCotain">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<SingleService />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error/>} />
            </Routes>
            <Footer />
            </div>
        </Router>
    );
}

export default App;