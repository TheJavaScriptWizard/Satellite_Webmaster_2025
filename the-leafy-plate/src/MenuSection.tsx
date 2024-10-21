import React from 'react';

const MenuSection = ({ imageUrl, items }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
            <img src={imageUrl} alt="Description" style={{ maxWidth: '100px', height: 'auto', marginRight: '10px' }} />
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
                {items.map((item, index) => (
                    <li key={index} style={{ marginBottom: '5px' }}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuSection;

