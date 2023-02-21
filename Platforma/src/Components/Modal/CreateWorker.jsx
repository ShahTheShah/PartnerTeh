import { useContext, useState } from "react";
import { Context } from "../..";
import { create } from "../../HTTP/userAPI";

const CreateWorker = () => {
    const
        [lastName, setLastName] = useState(''),
        [firstName, setFirstName] = useState(''),
        [patronymic, setPatronymic] = useState(''),
        [message, setMessage] = useState(''),
        [role, setRole] = useState(''),
        specializationsInputs = {},
        [email, setEmail] = useState('');

    const { specializations, directions } = useContext(Context);

    const createWorker = async () => {
        try {
            const response = await create({
                email, lastName, firstName, patronymic, specializations: specializationsInputs, role
            });
            setMessage({status: '', text: `Пароль: ${response.password}`});
        } catch(error) {
            setMessage({status: 'error', text: error.response?.data.message});
        }
    }
    return <form
        className="create-worker"
        onSubmit={_e => _e.preventDefault()}
    >
        <input
            placeholder="Введите фамилию..."
            className="input"
            type="text"
            value={lastName}
            onChange={_e => setLastName(_e.target.value)}
        />
        <input
            placeholder="Введите имя..."
            className="input"
            type="text"
            value={firstName}
            onChange={_e => setFirstName(_e.target.value)}
        />
        <input
            placeholder="Введите отчество..."
            className="input"
            type="text"
            value={patronymic}
            onChange={_e => setPatronymic(_e.target.value)}
        />
        <input
            placeholder="Введите почту..."
            className="input"
            type="email"
            value={email}
            onChange={_e => setEmail(_e.target.value)}
        />
        <select
            value={role}
            onChange={_e => setRole(_e.target.value)}
        >
            <option value="WORKER">Сотрудник</option>
            <option value="ADMIN">Администратор</option>
        </select>
        <table className="create-worker-specialization">
            <tr>
                <td></td>
                {specializations.specializations.map(({ title }) =>
                    <td>{title}</td>
                )}
            </tr>
            {directions.directions.map(({ id: dirId, title }) =>
                <tr>
                    <td>{title}</td>
                    {specializations.specializations.map(({ id: specId }) => {
                        { specializationsInputs[`${dirId}-${specId}`] = false }
                        return <td><input type="checkbox" name={`${dirId}-${specId}`} onChange={_e => specializationsInputs[`${dirId}-${specId}`] = _e.target.checked} /></td>
                    })}
                </tr>
            )}
        </table>
        <p className={message.status == 'error' ? "create-worker_message create-worker_message--error" : "create-worker_message"}>{message.text}</p>
        <button type="submit" className="button" onClick={createWorker}>Добавить</button>
    </form>;
};

export default CreateWorker;


//  decus.team@mail.ru MGyyyhtt
