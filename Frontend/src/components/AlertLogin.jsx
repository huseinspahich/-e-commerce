import React, { useState, useEffect } from 'react';

const AlertLogin = ({ message, duration }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!showAlert) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '0', // position at the top of the page
        left: '50%', // center horizontally
        transform: 'translateX(-50%)', // adjust to center
        maxWidth: '400px', // set a maximum width
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1000, // add z-index to ensure the alert is displayed on top
      }}
    >
      {message}
    </div>
  );
};

export default AlertLogin;