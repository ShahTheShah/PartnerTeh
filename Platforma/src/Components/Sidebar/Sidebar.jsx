import React from 'react';
import Directions from '../Directions/Directions';
import Envirement from '../Envirement/Envirement';
import ProjectsData from '../ProjectsData/ProjectsData';
import './Sidebar.scss';

const Sidebar = () => {
    return <aside className='sidebar'>
        <Directions/>
        {/* <ProjectsData/> */}
        <Envirement/>
    </aside>;
};

export default Sidebar;
