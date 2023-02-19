import { useContext, useState } from "react";
import { Context } from "../..";
import { create } from "../../HTTP/facilityesAPI";

const CreateFacilityes = () => {
    const { workers, stages, customers, directions } = useContext(Context);

    const
        [name, setName] = useState(''),
        [address, setAddress] = useState(''),
        [parameters, setParameters] = useState(''),
        [customer, setCustomer] = useState(''),
        [contractNumber, setContractNumber] = useState(''),
        [price, setPrice] = useState(0),
        [direction, setDirection] = useState(''),
        [date, setDate] = useState(''),
        stagesSelect = {};

    const createFacility = async () => {
        // const response = await create();
        const data = {
            name, address, parameters, customerId: customer,
            contractNumber, price, date, stages: stagesSelect,
            directionId: direction
        };
        const response = await create(data);
        console.log(response)
    }
    return <form
        className="create-facility"
        onSubmit={_e => _e.preventDefault()}
    >
        <input
            placeholder="Введите наименование..."
            className="create-facility_input input"
            type="text"
            value={name}
            onChange={_e => setName(_e.target.value)}
        />
        <input
            placeholder="Введите адрес..."
            className="create-facility_input input"
            type="text"
            value={address}
            onChange={_e => setAddress(_e.target.value)}
        />
        <input
            placeholder="Введите титул..."
            className="create-facility_input input"
            type="text"
            value={parameters}
            onChange={_e => setParameters(_e.target.value)}
        />
        <select
            value={customer}
            onChange={_e => setCustomer(_e.target.value)}
        >
            <option default>Выберите заказчика</option>
            {customers.customers.map(({name, id}) =>
                <option value={id}>{name}</option>
            )}
        </select>
        <select
            value={direction}
            onChange={_e => setDirection(_e.target.value)}
        >
            <option default>Выберите напраление</option>
            {directions.directions.map(({title, id}) =>
                <option value={id}>{title}</option>
            )}
        </select>
        <input
            placeholder="Введите номер договора..."
            className="create-facility_input input"
            type="text"
            value={contractNumber}
            onChange={_e => setContractNumber(_e.target.value)}
        />
        <input
            placeholder="Введите стоимость..."
            className="create-facility_input input"
            type="text"
            value={price}
            onChange={_e => setPrice(_e.target.value)}
        />
        <input
            placeholder="Введите дату завершения..."
            className="create-facility_input input"
            type="date"
            value={date}
            onChange={_e => setDate(_e.target.value)}
        />
        <ul className="stages">
            {stages.stages.map(({ name, id }) => {
                stagesSelect[id] = 'anonymus';
                return <li key={id} className='stages_li'>
                    <h4 className="stages_name">{name}</h4>
                    <select onChange={_e => stagesSelect[id] = _e.target.value}>
                        <option value="anonymus" default>Выберите</option>
                        {workers.workers.map(({ lastName, firstName, id }) =>
                            <option value={id}>{`${lastName} ${firstName}`}</option>
                        )}
                    </select>
                </li>
            })}
        </ul>
        <button type="submit" className="button" onClick={createFacility}>Создать проект</button>
    </form>;
};

export default CreateFacilityes;
