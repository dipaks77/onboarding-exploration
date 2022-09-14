import React from 'react';

const BUTTON_TYPE_BG = {
    primary: 'bg-royal-blue'
}

const Button = ({
    label,
    type = 'primary',
    customStyles = ''
}) => {
    
    const getBgColor = () => (
        BUTTON_TYPE_BG[type]
    );

    const getTextColor = () => (
        type === 'primary' ? 'text-white' : 'text-black'
    );

    return (
        <>
            <button className={`${getBgColor()} ${getTextColor()} ${customStyles} px-4 py-2 rounded-lg`}>{label}</button>
        </>
    )
};

export default Button;
