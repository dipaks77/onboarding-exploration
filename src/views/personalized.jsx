import React, { useState } from 'react';
import Button from '../UI Elements/button';
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
            <div className='flex justify-center flex-col items-center m:my-4 m:space-y-2 xsm:my-2 xsm:space-y-1'>
                <p className='m:text-3xl xsm:text-base font-semibold'>How are you planning to use Eden?</p>
                <p className='m:text-sm xsm:text-xs text-gray-500'>We'll streamline your setup experience accordingly.</p>
            </div>
            <div className='flex m:space-x-4 xsm:space-x-2 justify-center items-center'>
                {CARD_DATA.map((cardItem, index) => (
                    <Card
                        key={`card-item-${index}`}
                        onClick={() => handleActiveCardIndex(index)}
                        isActive={activeCardIndex === index}
                        {...cardItem}
                    />
                ))}
            </div>
            <Button label={'Create Workspace'} customStyles='m:!mt-6 mx-auto w-2/4' />
        </>
    )
};

export default Personalized;
