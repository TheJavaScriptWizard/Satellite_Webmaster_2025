import React from 'react';

const MButt = ({ label, onClick }) => {
    return (
        <button onClick={onClick} style={{ fontSize: '2.5rem', width: '10rem', height: '6rem', marginTop: '2rem', marginBottom: '2rem', backgroundImage: 'url(/wood.jpg)' }}>
        {label}
        </button>
    );
};

export default MButt;
