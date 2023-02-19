import { useState } from "react";
import { create } from "../../HTTP/specializationsAPI";

const CreateSpecialization = () => {
    const [specialization, setSpecialization] = useState('');
    const createSpecialization = async () => {
        const response = await create({title: specialization});
        console.log(response)
    }
    return <form
        className="create-direction"
        onSubmit={_e => _e.preventDefault()}
    >
        <input
            placeholder="Введите название специализации..."
            type="text"
            className="create-direction_input input"
            value={specialization}
            onChange={_e => setSpecialization(_e.target.value)}
        />
        <button
            type="submit"
            className="create-direction_button button"
            onClick={createSpecialization}
        >Добавить специализацию</button>
    </form>;
};

export default CreateSpecialization;
