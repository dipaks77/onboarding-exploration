import React from 'react';
import FormField from '../components/formField';

const Welcome = () => {
    return (
        <>
            <div className='flex justify-center flex-col items-center my-4 space-y-2'>
                <p className='text-3xl font-semibold'>Welcome! First things first...</p>
                <p className='text-sm text-gray-500'>You can always change them later.</p>
            </div>
            <FormField
                label='Full Name'
                placeholder='Steve Jobs'
            />
            <FormField
                label='Display Name'
                placeholder='Steve'
            />
        </>
    )
};

export default Welcome;
