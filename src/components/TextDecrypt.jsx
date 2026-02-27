import React, { useState, useEffect } from 'react';

const TextDecrypt = ({ text, delay = 0, duration = 1000, className = "" }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayText(text);
        }, delay);

        return () => clearTimeout(timer);
    }, [text, delay]);

    return (
        <span 
            className={`${className} font-mono transition-opacity duration-300`}
            style={{
                animation: displayText ? 'none' : `fadeIn ${duration}ms ease-in forwards`,
                opacity: displayText ? 1 : 0.6
            }}
        >
            {displayText || text}
        </span>
    );
};

export default TextDecrypt;
