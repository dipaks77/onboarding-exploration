import React from 'react';
import Button from '../UI Elements/button';
import FormField from '../UI Elements/formField';

const Workspace = () => {
    return (
        <>
            <div className='flex justify-center flex-col items-center m:my-4 m:space-y-2 xsm:my-2 xsm:space-y-0'>
                <p className='m:text-3xl xsm:text-base font-semibold'>Let's set up a home for all your work</p>
                <p className='m:text-sm xsm:text-xs text-gray-500'>You can always create another workspace later.</p>
            </div>
            <div className='flex flex-col m:space-y-3 m:mx-24 xsm:space-y-2 xsm:mx-8'>
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
                <Button label={'Create Workspace'} customStyles='m:!mt-6' />
            </div>
        </>
    )
};

export default Workspace;
