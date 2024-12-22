import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file
import MButt from './MenuButton';
import { useNavigate } from 'react-router-dom';
import WavyBox from './WavyBox';

const Menu: React.FC = () => {

    const navigate = useNavigate();

    return (
        <>
            <div
                className="Taskbar"
                style={{
                    display: 'flex', // Use flexbox for layout
                    alignItems: 'center', // Vertically align items
                    justifyContent: 'space-between', // Push items to opposite sides
                    backgroundColor: 'beige',
                }}
            >
                {/* Text box on the left */}
                <div
                    style={{
                        border: '2px solid black',
                        width: '50rem',
                        height: '6rem',
                        marginTop: '2rem',
                        marginBottom: '2rem',
                        marginLeft: '4rem',
                        fontSize: '4rem',
                        display: 'table',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        backgroundColor: 'white',
                    }}
                >
                    {'The Leafy Plate'}
                </div>

                {/* Menu buttons on the right */}
                <div
                    style={{
                        display: 'flex',
                        gap: '2rem', // Add spacing between buttons
                        flexWrap: 'wrap', // Wrap buttons on smaller screens
                        justifyContent: 'flex-end', // Ensure buttons align to the right
                        marginRight: '4rem',
                    }}
                >
                    <MButt label="Home" onClick={() => navigate('/')} />
                    <MButt label="Menu" onClick={() => navigate('/menu')} />
                    <MButt label="Account" onClick={() => navigate('/contact')} />
                    <MButt label="Order" onClick={() => navigate('/order')} />
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 50%)', gridTemplateRows: 'repeat(3, 30rem)', gap: '1rem', width: '100%', height: '100vh' }}>
                <div style={{ display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', fontSize: '1rem', color: 'white', width: '100%', height: '100%' }}>
                    <WavyBox width="300" height="300" color='#BF40BF' />

                    {/* White box centered inside the WavyBox */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '260px',  // Width of the white box
                            height: '240px', // Height of the white box
                            backgroundColor: 'white',
                            border: '1px solid #ccc',
                        }}
                    />
                </div>
                <div style={{ backgroundColor: 'blue', display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', border: '1px solid #ccc', fontSize: '1rem', color: 'white', width: '100%', height: '100%' }}>
                    <WavyBox width="300" height="300" color='#BF40BF' />

                    {/* White box centered inside the WavyBox */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '260px',  // Width of the white box
                            height: '240px', // Height of the white box
                            backgroundColor: 'white',
                            border: '1px solid #ccc',
                        }}
                    />
                </div>
                <div style={{ backgroundColor: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ccc', fontSize: '1.5rem', color: 'white' }}>3</div>
                <div style={{ backgroundColor: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ccc', fontSize: '1.5rem', color: 'white' }}>4</div>
                <div style={{ backgroundColor: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ccc', fontSize: '1.5rem', color: 'white' }}>5</div>
                <div style={{ backgroundColor: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ccc', fontSize: '1.5rem', color: 'white' }}>6</div>
            </div >
        </>
    );
};

export default Menu;
