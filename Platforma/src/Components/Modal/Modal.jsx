import { useEffect, useState } from 'react';
import CreateCustomers from './CreateCustomers';
import CreateFacilityes from './CreateFacilityes';
import CreateWorker from './CreateWorker';
import './Modal.scss';

const Modal = ({ isActive, setIsActive, children }) => {

    return <div
        className={!isActive ? 'modal' : "modal modal--active"}
        onClick={_e => setIsActive(false)}
    >
        <div className="modal-content" onClick={_e => _e.stopPropagation()}>
            <header className="modal-header">
                {/* <h1>{modalHeader}</h1> */}
                <button className="modal_close" onClick={_e => setIsActive(false)}></button>
            </header>
            <div className="modal-main">{children}</div>
        </div>
    </div>;
};

export default Modal;
