import React from 'react';

const FormField = ({
    label,
    placeholder = null,
}) => {
    return (
        <>
            <p className='text-sm font-semibold'>{label}</p>
            <input
                type='text'
                className='border rounded-md py-3 px-2 w-full'
                {...placeholder ? { placeholder } : {}}
            />
        </>
    )
};

export default FormField;
