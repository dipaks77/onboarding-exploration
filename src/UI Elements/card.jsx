import React from 'react';

const Card = ({
    header,
    title,
    content,
    onClick,
    isActive = false
}) => {
    return (
        <>
           <div className={`m:w-1/4 sm:w-full h-full text-sm border rounded-md p-4 flex flex-col space-y-3 ${isActive ? '!border-royal-blue' : ''} hover:!border-royal-blue hover:cursor-pointer`} onClick={onClick}>
                <p>{header}</p>
                <p className='font-bold'>{title}</p>
                <p className='text-gray-500'>{content}</p>
           </div>
        </>
    )
};

export default Card;
