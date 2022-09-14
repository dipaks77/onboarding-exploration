import React, { useState } from 'react';
import Card from '../UI Elements/card';

const CARD_DATA = [
    {
        header: <img src='user-icon.png' className='w-8' />,
        title: 'For Myself',
        content: 'Write better. Think more clearly. Stay organized.'
    }, {
        header: <img src='group-icon.png' className='w-8' />,
        title: 'With my team',
        content: 'Wikis, docs, tasks & projects, all in one place.'
    },
];

const Personalized = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const handleActiveCardIndex = (index) => {
        setActiveCardIndex(index);
    };

    return (
        <>
            <div className='flex justify-center flex-col items-center my-4 space-y-2'>
                <p className='text-3xl font-semibold'>How are you planning to use Eden?</p>
                <p className='text-sm text-gray-500'>We'll streamline your setup experience accordingly.</p>
            </div>
            <div className='flex space-x-4 justify-center items-center'>
                {CARD_DATA.map((cardItem, index) => (
                    <Card
                        key={`card-item-${index}`}
                        onClick={() => handleActiveCardIndex(index)}
                        isActive={activeCardIndex === index}
                        {...cardItem}
                    />
                ))}
            </div>
        </>
    )
};

export default Personalized;
