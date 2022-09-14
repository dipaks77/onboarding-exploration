import React from 'react';
import Button from '../UI Elements/button';
import FormField from '../UI Elements/formField';

const Workspace = () => {
    return (
        <>
            <div className='flex justify-center flex-col items-center my-4 space-y-2'>
                <p className='text-3xl font-semibold'>Let's set up a home for all your work</p>
                <p className='text-sm text-gray-500'>You can always create another workspace later.</p>
            </div>
            <div className='flex flex-col space-y-3 mx-8'>
                <FormField
                    label='Workspace Name'
                    placeholder='Eden'
                />
                <FormField
                    label='Workspace URL'
                    subLabel='(optional)'
                    placeholder='Example'
                    prefix='www.eden.com/'
                />
                <Button label={'Create Workspace'} customStyles='!mt-6' />
            </div>
        </>
    )
};

export default Workspace;
