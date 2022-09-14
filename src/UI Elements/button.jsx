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
            <button className={`${getBgColor()} ${getTextColor()} ${customStyles} m:px-4 py-2 xsm:px-0 rounded-lg m:text-sm xsm:text-xs`}>{label}</button>
        </>
    )
};

export default Button;
