import React, { useState } from 'react';
import Step from '../components/step';
import Welcome from './welcome';

const ROUTE_STEPS = [
    {
        step: 1,
        component: Welcome,
    }, {
        step: 2,
        component: Welcome,
    }, {
        step: 3,
        component: Welcome,
    }, {
        step: 4,
        component: Welcome,
    }
];

const Onboarding = () => {
    const [activeStep, setActiveStep] = useState(1);

    const ActiveComponent = ROUTE_STEPS[activeStep].component;

    const handleRouteChange = (step) => setActiveStep(step);

    return (
        <>
            <div className='absolute bg-catskill-white rounded-md w-full h-full'>
                <div className='mx-10 my-20 bg-white px-4 py-20'>
                    <p className='w-full text-center font-medium text-3xl'>Eden</p>
                    <div className='my-10 w-full flex justify-center items-center'>
                        {ROUTE_STEPS.map((routeStepItem, index) => (
                            <React.Fragment key={`route-item-${index}`}>
                                <Step
                                    step={routeStepItem.step}
                                    active={routeStepItem.step === activeStep}
                                    highlight={activeStep > routeStepItem.step}
                                    borderRight={ROUTE_STEPS.length !== (index + 1)}
                                    handleRouteChange={() => handleRouteChange(routeStepItem.step)}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex justify-center w-96 flex-col space-y-3'>
                            <ActiveComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Onboarding;