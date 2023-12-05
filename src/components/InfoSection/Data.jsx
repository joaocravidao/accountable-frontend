import svgImage from '../../images/svg-1.svg';
import svgImage2 from '../../images/svg-2.svg';
import svgImage3 from '../../images/svg-3.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'The Best To-do App',
    headline: 'The Quickest & Easiest Way To create a To-do List',
    description: 'Get access to our exclusive app that allows you to create unlimited tasks to keep your days more organized.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: svgImage,
    alt: 'board',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjTwo = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Contact Us',
    headline: 'Enter in contact with us',
    description: 'If you need more information about this app, send us an email.',
    buttonLabel: 'Send Email',
    imgStart: true,
    img: svgImage2,
    alt: 'email',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topline: 'Join our App',
    headline: 'Creating an account is extremely easy',
    description: 'Register to get access to our features and enjoy this amazing and user-friendly app.',
    buttonLabel: 'Join Now',
    imgStart: false,
    img: svgImage3,
    alt: 'board',
    dark: false,
    primary: false,
    darkText: true,
};