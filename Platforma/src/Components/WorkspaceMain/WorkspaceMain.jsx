import React from 'react';
import Project from '../Project/Project';
import './WorkspaceMain.scss';
import WorkspaceMenu from './WorkspaceMenu';

const WorkspaceMain = () => {
    return <section className='workspace-main'>
        <Project />
        <WorkspaceMenu />
    </section>;
};

export default WorkspaceMain;
