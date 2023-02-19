import Directions from '../Directions/Directions';
import Envirement from '../Envirement/Envirement';
import './Sidebar.scss';

const Sidebar = () => {
    return <aside className='sidebar'>
        <Directions />
        <Envirement />
    </aside>;
};

export default Sidebar;
