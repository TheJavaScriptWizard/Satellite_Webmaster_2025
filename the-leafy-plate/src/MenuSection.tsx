import React from 'react';

const MenuSection = ({ imageUrl, items }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                border: '2px solid #ccc', // Box border
                borderRadius: '8px',
                padding: '20px',
                maxWidth: '200px', // Set max width for the container
                margin: '10px',
            }}
        >
            {/* Image */}
            <img
                src={imageUrl}
                alt="Description"
                style={{
                    maxWidth: '100px',
                    height: 'auto',
                    marginBottom: '20px', // Margin to separate image and list
                }}
            />
            
            {/* Items List */}
            <ul
                style={{
                    listStyleType: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px', // Spacing between items
                }}
            >
                {items.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            wordBreak: 'break-word', // Handle long text
                            textAlign: 'center', // Center-align the list text
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuSection;

