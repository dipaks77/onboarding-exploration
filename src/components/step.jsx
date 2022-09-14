import React from 'react';

const BorderRight = ({
    highlight, active
}) => (
    <>
        {!active && !highlight ?
            <hr className='xxm:w-20 xm:w-14 xsm:w-14' /> : active && !highlight ?
                <>
                    <hr className='xxm:w-10 xm:w-8 xsm:w-7 border-[0] h-[1px] bg-royal-blue' />
                    <hr className='xxm:w-10 xm:w-8 xsm:w-7' />
                </> : !active && highlight ?
                    <>
                        <hr className='xxm:w-20 xm:w-14 xsm:w-14 border-[0] h-[1px] bg-royal-blue' />
                    </> : <></>}
    </>
);

const Step = ({
    step,
    handleRouteChange,
    active = false,
    borderRight = false,
    highlight = false
}) => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <div className={`m:w-8 m:h-8 xsm:w-6 xsm:h-6 border rounded-full flex items-center justify-center ${active || highlight ? 'bg-royal-blue text-white' : 'bg-white'} hover:bg-royal-blue hover:text-white hover:cursor-pointer`}
                onClick={handleRouteChange}>
                    <p className='m:text-sm xsm:text-xs'>{step}</p>
                </div>
                {borderRight ? <BorderRight active={active} highlight={highlight} /> : <></>}
            </div>
        </>
    )
};

export default Step;
