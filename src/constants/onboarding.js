import Welcome from './welcome';
import Workspace from './workspace';
import Personalized from './personalized';
import FinalStep from './finalStep';

export const ROUTE_STEPS = [
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

export const CARD_DATA = [
    {
        header: <img src='user-icon.png' className='w-8' />,
        title: 'For Myself',
        content: 'Write better. Think more clearly. Stay organized.'
    }, {
        header: <img src='group-icon.png' className='w-8' />,
        title: 'With my team',
        content: 'Wikis, docs, tasks & projects, all in one place.'
    },
];