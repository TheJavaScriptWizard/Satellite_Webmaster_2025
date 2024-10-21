import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu'; // Import your Menu component
import Home from './Home'; // Example home component, where the button is located
import About from './About'; // Example home component, where the button is located
import Contact from './Contact'; // Example home component, where the button is located
import Order from './Order'; // Example home component, where the button is located

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/menu" element={<Menu />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Order" element={<Order />} />
            </Routes>
        </Router>
    );
};

export default App;

