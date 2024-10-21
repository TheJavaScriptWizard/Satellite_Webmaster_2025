import React, { useState, useEffect } from 'react';
import Button from './Button';
import Confetti from 'react-confetti';
import './App.css'; // Import your CSS file
import MButt from './MenuButton';
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
    const navigate = useNavigate();

    return (
       <>
            <div style={{ 
                backgroundImage: 'url(/home_background.avif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '400vh', // Full viewport height
                width: '100vw'   // Full viewport width
            }}>
                <div className='Menu'>
                        <MButt label="Home" onClick={() => navigate('/')} />
                        <MButt label="Menu" onClick={() => navigate('/menu')} />
                        <MButt label="About" onClick={() => navigate('/about')} />
                        <MButt label="Contact" onClick={() => navigate('/contact')} />
                        <MButt label="Order" onClick={() => navigate('/order')} />
                </div>
            </div>
        </>
    );
};

export default Menu;
