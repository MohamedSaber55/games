import React, { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

const ScrollToTopBTN = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const currentPosition = window.scrollY;
        if (currentPosition > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', handleScroll);

    return visible ? (
        <button className="ScrollToTopBTN border border-second-light rounded-full p-2 text-second-light hover:text-light duration-300 shadow-sm animate-bounce" onClick={handleClick}><MdOutlineKeyboardDoubleArrowUp size={30} /></button>
    ) : null;
};

export default ScrollToTopBTN;