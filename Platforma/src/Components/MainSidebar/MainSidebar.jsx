import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../..';
import CreateCustomers from '../Modal/CreateCustomers';
import CreateDirections from '../Modal/CreateDirections';
import CreateFacilityes from '../Modal/CreateFacilityes';
import CreateSpecialization from '../Modal/CreateSpecialization';
import CreateStages from '../Modal/CreateStages';
import CreateWorker from '../Modal/CreateWorker';
import Modal from '../Modal/Modal';
import './MainSidebar.scss';

const MainSidebar = () => {
    const {user} = useContext(Context);
    const
        [modalIsActive, setModalIsActive] = useState(false),
        [modalContent, setModalContent] = useState(''),
        { pathname } = useLocation();

    const openModal = content => {
        switch (content) {
            case 'workers': {
                setModalContent(<CreateWorker />);
                break;
            }
            case 'facilityes': {
                setModalContent(<CreateFacilityes />);
                break;
            }
            case 'customers': {
                setModalContent(<CreateCustomers />);
                break;
            }
            case 'directions': {
                setModalContent(<CreateDirections />);
                break;
            }
            case 'specializations': {
                setModalContent(<CreateSpecialization />);
                break;
            }
            case 'stages': {
                setModalContent(<CreateStages />);
                break;
            }
        }
        setModalIsActive(true);
    };
    const forAdmin = () => <>
        {pathname === '/facilityes' && <button className='button' onClick={() => openModal('facilityes')}>Добавить проект    </button>}
        {pathname === '/facilityes' && <button className='button' onClick={() => openModal('directions')}>Добавить направление    </button>}
        {pathname === '/facilityes' && <button className='button' onClick={() => openModal('specializations')}>Добавить специализацию    </button>}
        {pathname === '/facilityes' && <button className='button' onClick={() => openModal('stages')}>Добавить стадию    </button>}
        {pathname === '/workers' && <button className='button' onClick={() => openModal('workers')}>Добавить сотрудника</button>}
        {pathname === '/customers' && <button className='button' onClick={() => openModal('customers')}>Добавить клиента   </button>}
        <Modal isActive={modalIsActive} setIsActive={setModalIsActive}>
            {modalContent}
        </Modal>
    </>
    return <aside className="main-sidebar">
        {user.user.role == 'ADMIN' && forAdmin()}
    </aside>;
};

export default MainSidebar;
