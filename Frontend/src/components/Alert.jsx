import React, { useState, useEffect } from 'react';

const Alert = ({ message, duration }) => {
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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      {message}
    </div>
  );
};

export default Alert;