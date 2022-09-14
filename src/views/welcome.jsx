import React from 'react';
import Button from '../UI Elements/button';
import FormField from '../UI Elements/formField';

const Welcome = () => {
    return (
        <>
            <div className='flex justify-center flex-col items-center my-4 space-y-2'>
                <p className='text-3xl font-semibold'>Welcome! First things first...</p>
                <p className='text-sm text-gray-500'>You can always change them later.</p>
            </div>
            <div className='flex flex-col space-y-3 mx-28'>
                <FormField
                    label='Full Name'
                    placeholder='Steve Jobs'
                />
                <FormField
                    label='Display Name'
                    placeholder='Steve'
                />
                <Button label={'Create Workspace'} customStyles='!mt-6' />
            </div>
        </>
    )
};

export default Welcome;
