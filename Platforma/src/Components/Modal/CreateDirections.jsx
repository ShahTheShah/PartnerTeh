import { useState } from "react";
import { create } from "../../HTTP/directionsAPI";

const CreateDirections = () => {
    const [direction, setDirection] = useState('');
    const createDirection = async () => {
        const response = await create({title: direction});
        console.log(response)
    }
    return <form
        className="create-direction"
        onSubmit={_e => _e.preventDefault()}
    >
        <input
            placeholder="Введите название направления..."
            type="text"
            className="create-direction_input input"
            value={direction}
            onChange={_e => setDirection(_e.target.value)}
        />
        <button
            type="submit"
            className="create-direction_button button"
            onClick={createDirection}
        >Добавить направление</button>
    </form>;
};

export default CreateDirections;
