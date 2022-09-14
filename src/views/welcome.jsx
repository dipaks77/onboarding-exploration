import React from 'react';
import Button from '../UI Elements/button';
import FormField from '../UI Elements/formField';

const Welcome = () => {
    return (
        <>
            <div className='flex justify-center flex-col items-center m:my-4 xsm:my-2 m:space-y-2'>
                <p className='xxm:text-3xl m:text-2xl font-semibold xsm:text-base'>Welcome! First things first...</p>
                <p className='m:text-sm xsm:text-xs text-gray-500'>You can always change them later.</p>
            </div>
            <div className='flex flex-col m:space-y-3 xxxm:mx-28 xsm:space-y-2 mx-2'>
                <FormField
                    label='Full Name'
                    placeholder='Steve Jobs'
                />
                <FormField
                    label='Display Name'
                    placeholder='Steve'
                />
                <Button label={'Create Workspace'} customStyles='m:!mt-6 xsm:!mt-3' />
            </div>
        </>
    )
};

export default Welcome;
