import './Workers.scss';

import { useContext, useEffect } from "react";
import { Context } from "../..";
import photo from '../../photo.png';
import { observer } from 'mobx-react-lite';
import { getWorkers } from '../../HTTP/userAPI';

const Workers = observer(() => {
    const { workers } = useContext(Context);
    return <ul className="workers">
        {workers.workers.map(({id, firstName}) =>
            <li key={id} className='worker'>
                <img className='worker_profilePicture' src={photo} alt={firstName} />
                <h4 className="worker_name">{firstName}</h4>
            </li>
        )}
    </ul>;
});

export default Workers;
