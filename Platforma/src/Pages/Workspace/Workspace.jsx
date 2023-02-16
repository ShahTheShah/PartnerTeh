import React from 'react';
import './Workspace.scss';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import WorkspaceMain from '../../Components/WorkspaceMain/WorkspaceMain';

const Workspace = () => {
    return <>
        <Header />
        <Sidebar />
        <WorkspaceMain />
    </>;
};

export default Workspace;
