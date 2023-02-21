import { useContext } from 'react';
import { Context } from '../..';
import Directions from '../Directions/Directions';
import Envirement from '../Envirement/Envirement';
import './Sidebar.scss';

const Sidebar = () => {
    const { user } = useContext(Context);
    return <aside className='sidebar'>
        <Directions />
        {user.user.role == 'ADMIN' && <Envirement />}
    </aside>;
};

export default Sidebar;
