import React, { useState, useEffect } from 'react';
import Button from './Button';
import Confetti from 'react-confetti';
import './App.css'; // Import your CSS file

const App: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleClick = (): void => {
    setShowConfetti(true);
    setFadeOut(false);
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 1000);
    }, 3000);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ padding: '90px' }}>
      {showConfetti && (
        <div className={`confetti-container ${fadeOut ? 'fade-out' : ''}`}>
          <Confetti width={windowWidth} height={windowHeight} />
        </div>
      )}
      <div style={{  textAlign: 'center'  }}>
          <h1 style={{  color: 'green', fontSize: '6rem'  }}>The Leafy Plate</h1>
          <Button label="Press for express lettuce delivery" onClick={handleClick} />
      </div>
    </div>
  );
};

export default App;

