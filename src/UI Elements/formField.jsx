import React from 'react';

const FormField = ({
    label,
    subLabel = null,
    placeholder = null,
    prefix = null
}) => {
    return (
        <>
            <p className='m:text-sm m:font-semibold xsm:font-normal xsm:text-xs'>
                {label}
                {subLabel ? <span className='text-gray-500'>{subLabel}</span> : <></>}
            </p>
            <div className='flex'>
                {prefix ? <>
                    <input className='bg-white-lilac border !border-gray-200 !text-gray-800 w-fit cursor-default pointer-events-none px-2 m:text-sm xsm:text-xs' placeholder={prefix} />
                </> : <></>}
                <input
                    type='text'
                    className={`border ${prefix ? 'rounded-tr-md rounded-br-md' : 'rounded-md'} m:py-3 m:px-2 m::text-sm w-full xsm:py-2 xsm:px-1 xsm:text-xs`}
                    {...placeholder ? { placeholder } : {}}
                />
            </div>
        </>
    )
};

export default FormField;
