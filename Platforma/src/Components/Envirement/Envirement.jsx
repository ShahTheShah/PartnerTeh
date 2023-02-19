import { useHistory, useLocation } from 'react-router-dom';
import './Envirement.scss';

const Envirement = () => {
    const
        history = useHistory(),
        { pathname } = useLocation();
    const
        openCustomersPage = () => {
            history.push('/customers');
        },
        openWorkersPage = () => {
            history.push('/workers')
        }
    return <section className="envirement">
        <h3 className="envirement_title title">Окружение</h3>
        <button
            className={pathname === '/workers' ? 'button active' : "button"}
            onClick={openWorkersPage}
        >Сотрудники</button>
        <button
            className={pathname === '/customers' ? 'button active' : "button"}
            onClick={openCustomersPage}
        >Клиенты</button>
    </section>;
};

export default Envirement;
