import React from 'react';
import './Logo.scss';

import logo from '../../logo.svg';

const Logo = () => {
    return <section className='logo__wrapper'>
        <img className='logo' src={logo} alt='ООО "Партнер"'/>
    </section>;
};

export default Logo;
