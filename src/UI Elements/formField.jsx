import React from 'react';

const FormField = ({
    label,
    subLabel = null,
    placeholder = null,
    prefix = null
}) => {
    return (
        <>
            <p className='text-sm font-semibold'>
                {label}
                {subLabel ? <span className='text-gray-500'>{subLabel}</span> : <></>}
            </p>
            <div className='flex'>
                {prefix ? <>
                    <input className='bg-white-lilac border !border-gray-200 !text-gray-800 w-fit cursor-default pointer-events-none px-2' placeholder={prefix} />
                </> : <></>}
                <input
                    type='text'
                    className={`border ${prefix ? 'rounded-tr-md rounded-br-md' : 'rounded-md'} py-3 px-2 w-full`}
                    {...placeholder ? { placeholder } : {}}
                />
            </div>
        </>
    )
};

export default FormField;
