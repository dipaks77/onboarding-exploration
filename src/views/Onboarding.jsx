import React, { useState, useEffect } from 'react';
import Step from '../components/step';
import Welcome from './welcome';
import Workspace from './workspace';
import Personalized from './personalized';
import FinalStep from './finalStep';

const ROUTE_STEPS = [
    {
        step: 1,
        component: Welcome,
    }, {
        step: 2,
        component: Workspace,
    }, {
        step: 3,
        component: Personalized,
    }, {
        step: 4,
        component: FinalStep,
    }
];

const Onboarding = () => {
    const [activeStep, setActiveStep] = useState(1);

    useEffect(() => {
        setActiveStep(1);
    }, []);

    const ActiveComponent = ROUTE_STEPS.find(routeItem => routeItem.step === activeStep).component;

    const handleRouteChange = (step) => { setActiveStep(step); }

    return (
        <>
            <div className='flex flex-col justify-center bg-catskill-white rounded-md w-full h-screen m:py-20 xsm:py-5 overflow-auto'>
                <div className='m:mx-20 xsm:mx-4 bg-white m:px-4 m:py-14 xsm:px-2 xsm:py-8'>
                    <div className='flex justify-center'>
                        <img src='logo.png' className='w-24' />
                    </div>
                    <div className='m:my-10 xsm:my-4 xsm:mt-6 w-full flex justify-center items-center'>
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
                        <div className='flex justify-center xxxm:w-1/2 xm:w-11/12 w-full flex-col space-y-3 xsm:space-y-1'>
                            <ActiveComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Onboarding;
