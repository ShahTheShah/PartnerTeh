import { useContext } from 'react';
import { Context } from '../..';
import './Facilityes.scss';

const Facilityes = () => {
    const { facilityes } = useContext(Context);
    return <ul className='facilityes'>
        {facilityes.facilityes.map(({
            id, name, address, parameters, contractNumber, completionDate,
            price, isActive, isCompleted, isConcelled, customerId, stages, directionId
        }) =>
            <li key={id} className='facility'>
                <div className="facility_number">№ {id}</div>
                <div className="facility_customer">{customerId}</div>
                <div className="facility_before">Параметры до: {parameters[0]}</div>
                <div className="facility_after">Параметры после: {parameters[1]}</div>
                <div className="facility_name">Имя проекта: {name}</div>
                <div className="facility_re">
                    <button className='button'>x</button>
                </div>
                <div className="facility_address">Адрес: {address}</div>
                <div className="facility-workers">
                    <h5>Сотрудники</h5>
                    <ul className="facility-workers-list">
                        {/* {stages.map((worker, i) =>
                            <li key={i}>{worker}</li>
                        )} */}
                    </ul>
                </div>
                <div className="facility_contract">№ контракта: {contractNumber}</div>
                <div className="facility_date">Дата завершения: {completionDate}</div>
            </li>
        )}
    </ul>;
};

export default Facilityes;
