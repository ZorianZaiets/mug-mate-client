import React, { useEffect, useState } from 'react';
import './Notification.css'  // Импортируйте CSS для стилизации и анимации

const Notification = ({ message, onClose,  className }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000); // Уведомление исчезает через 5 секунды

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`notification ${className}`}>
            {message}
        </div>
    );
};

export default Notification;