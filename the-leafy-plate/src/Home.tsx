import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file
import MButt from './MenuButton';
import { useNavigate } from 'react-router-dom';
import WavyBox from './WavyBox';

const Home: React.FC = () => {

    const navigate = useNavigate();

    return (
        <>
            <div style={{
                backgroundImage: 'url(/background.webp)', backgroundSize: 'cover', // Or 'contain'
                backgroundPosition: 'center', // Adjust as needed
                minHeight: '200vh'
            }} >
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 50%)', gridTemplateRows: 'repeat(3, 35rem)', gap: '1rem', width: '100%', height: '100vh' }}>
                    <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', height: '100%', }}>
                        <div style={{ position: 'absolute', width: '650px', height: '477px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  <img style={{ width: '600px' }} src={'Moo.jpg'} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', height: '100%', }}>
                        <div style={{ position: 'absolute', width: '650px', height: '347.5px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <img style={{ width: '600px' }} src={'Review.png'} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', height: '100%', }}>
                        <div style={{ position: 'absolute', width: '650px', height: '477px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  Menupicture
                        </div>
                    </div>
                    <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', height: '100%', }}>
                        <div style={{ position: 'absolute', width: '650px', height: '350px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}><h1>About us</h1><p style={{ margin: '1rem' }} >At The Leafy Plate, we believe that great food starts with great ingredients. That is why we source our produce from local farmers to bring you a delicious menu inspired by the rich agricultural diversity of Northern California. Each of our dishes are thoughtfully selected and crafted to reflect the vibrant flavors found locally, and help promote sustainability. Whether you prefer a hearty entrée, a crispy and refreshing salad, or a sweet desert, here at The Leafy Plate there is a place for you.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', height: '100%', }}>
                        <div style={{ position: 'absolute', width: '650px', height: '477px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  Menupicture
                        </div>
                    </div>
                </div >
            </div>
        </>
    );
};

export default Home;
