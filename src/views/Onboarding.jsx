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
            <div className='bg-catskill-white rounded-md w-full h-screen py-20 overflow-auto'>
                <div className='mx-10 bg-white px-4 py-14'>
                    <div className='flex justify-center'>
                        <img src='logo.png' />
                    </div>
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
