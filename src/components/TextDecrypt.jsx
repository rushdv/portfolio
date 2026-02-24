import React, { useState, useEffect, useCallback } from 'react';

const TextDecrypt = ({ text, delay = 0, duration = 1000, className = "" }) => {
    const [displayText, setDisplayText] = useState('');
    const [isFinished, setIsFinished] = useState(false);
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    const decrypt = useCallback(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split('')
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );

            if (iteration >= text.length) {
                clearInterval(interval);
                setIsFinished(true);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text, chars]);

    useEffect(() => {
        const timer = setTimeout(() => {
            decrypt();
        }, delay);

        return () => clearTimeout(timer);
    }, [decrypt, delay]);

    return (
        <span className={`${className} font-mono transition-all duration-300 ${isFinished ? '' : 'opacity-80'}`}>
            {displayText || text.split('').map(() => '_').join('')}
        </span>
    );
};

export default TextDecrypt;
