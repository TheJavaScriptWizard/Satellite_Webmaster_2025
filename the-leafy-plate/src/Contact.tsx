import React, { useState, useEffect } from 'react';
import Button from './Button';
import Confetti from 'react-confetti';
import './App.css'; // Import your CSS file
import MButt from './MenuButton';
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {

    return (
        <>
            <div style={{
                backgroundImage: `url(/background.png)`,
                backgroundSize: 'cover', // Or 'contain'
                backgroundPosition: 'center', // Adjust as needed
                minHeight: '100vh' // Ensure the background covers the full viewport
            }}>
                {/* Your app content */}
            </div>
        </>
    );
};

export default Menu;
