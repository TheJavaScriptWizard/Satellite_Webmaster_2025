import React, { useState, useEffect } from 'react';
import Button from './Button';
import Confetti from 'react-confetti';
import './App.css'; // Import your CSS file
import MButt from './MenuButton';
import Modal from './Modal';

const App: React.FC = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
                    <MButt label="Test" onClick={handleClick} />
                    <MButt label="Test" onClick={handleClick} />
                    <MButt label="Test" onClick={handleClick} />
                    <MButt label="Test" onClick={handleClick} />
                    <MButt label="Test" onClick={handleClick} />
                </div>
                <div style={{  textAlign: 'center'  }}>
                    <Button label="Press for express lettuce delivery" onClick={handleClick} />
                </div>
                {showConfetti && (
                    <div className={`confetti-container ${fadeOut ? 'fade-out' : ''}`}>
                        <Confetti width={windowWidth} height={windowHeight} />
                    </div>
                )}
                <button className="redButton"onClick={handleOpenModal}>Do Not Push!</button>
                {isModalOpen && (
                    <Modal onClose={handleCloseModal} videoId="KTyP_LTJnP4" />
                )}
            </div>
        </>
    );
};

export default App;

