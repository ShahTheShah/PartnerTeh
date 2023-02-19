import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CreateCustomers from '../Modal/CreateCustomers';
import CreateFacilityes from '../Modal/CreateFacilityes';
import CreateWorker from '../Modal/CreateWorker';
import Modal from '../Modal/Modal';
import './MainSidebar.scss';

const MainSidebar = () => {
    const
        [ modalIsActive, setModalIsActive ] = useState(false),
        [modalContent, setModalContent] = useState(''),
        { pathname } = useLocation();

    const openModal = path => {
        switch (pathname) {
            case '/workers': {
                setModalContent(<CreateWorker />);
                break;
            }
            case '/facilityes': {
                setModalContent(<CreateFacilityes />);
                break;
            }
            case '/customers': {
                setModalContent(<CreateCustomers />);
                break;
            }
        }
        setModalIsActive(true);
    };
    return <aside className="main-sidebar">
        {pathname === '/facilityes' && <button className='button' onClick={openModal}>Добавить проект    </button>}
        {pathname === '/workers'    && <button className='button' onClick={openModal}>Добавить сотрудника</button>}
        {pathname === '/customers'  && <button className='button' onClick={openModal}>Добавить клиента   </button>}
        <Modal isActive={modalIsActive} setIsActive={setModalIsActive}>
            {modalContent}
        </Modal>
    </aside>;
};

export default MainSidebar;
