import React from 'react';

interface ModalProps {
    onClose: () => void; // Function to close the modal
    videoId: string; // YouTube video ID
}

const Modal: React.FC<ModalProps> = ({ onClose, videoId }) => {
    return (
        <div style={overlayStyle}>
            <div style={modalStyle}>
                <button onClick={onClose} style={closeButtonStyle}>Close</button>
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
};

const closeButtonStyle: React.CSSProperties = {
    marginBottom: '10px',
};

export default Modal;

