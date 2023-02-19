import { useState } from "react";
import { create } from "../../HTTP/stageAPI";

const CreateStage = () => {
    const [stage, setStage] = useState('');
    const createStage = async () => {
        const response = await create({name: stage});
        console.log(response)
    }
    return <form
        className="create-direction"
        onSubmit={_e => _e.preventDefault()}
    >
        <input
            placeholder="Введите название стадии..."
            type="text"
            className="create-direction_input input"
            value={stage}
            onChange={_e => setStage(_e.target.value)}
        />
        <button
            type="submit"
            className="create-direction_button button"
            onClick={createStage}
        >Добавить стадию</button>
    </form>;
};

export default CreateStage;
