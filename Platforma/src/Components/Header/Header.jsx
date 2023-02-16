import React from 'react';
import './Header.scss';

import Logo from '../Logo/Logo';
import ProjectNumber from '../Project/ProjectNumber';
import WorkerData from '../WorkerData/WorkerData';

const Header = () => {
    return <header className='header'>
        <Logo />
        <ProjectNumber/>
        <WorkerData/>
    </header>;
};

export default Header;
