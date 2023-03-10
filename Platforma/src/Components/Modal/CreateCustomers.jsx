import { useState } from "react";
import { create } from "../../HTTP/customerAPI";

const CreateCustomer = () => {
    const [customer, setCustomer] = useState('');
    const createDirection = async () => {
        const response = await create({name: customer});
        console.log(response)
    }
    return <form
        className="create-direction"
        onSubmit={_e => _e.preventDefault()}
    >
        <input
            placeholder="Введите имя клиента..."
            type="text"
            className="create-direction_input input"
            value={customer}
            onChange={_e => setCustomer(_e.target.value)}
        />
        <button
            type="submit"
            className="create-direction_button button"
            onClick={createDirection}
        >Добавить клиента</button>
    </form>;
};

export default CreateCustomer;
