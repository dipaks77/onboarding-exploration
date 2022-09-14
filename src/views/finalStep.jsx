import React from 'react';
import Button from '../UI Elements/button';

const FinalStep = () => {
    return (
        <>
            <div className='mx-auto mt-10 mb-4 w-14 h-14 bg-royal-blue text-white font-bold rounded-full flex items-center justify-center'>
                &#10004;
            </div>
            <div className='flex justify-center flex-col items-center my-4 space-y-2'>
                <p className='text-3xl font-semibold'>Congratulations, Eren!</p>
                <p className='text-sm text-gray-500'>You have completed onboarding, you can start using the Eden!</p>
            </div>
            <Button label={'Launch Eden'} customStyles='!mt-6 w-1/2 mx-auto' />
        </>
    )
};

export default FinalStep;
