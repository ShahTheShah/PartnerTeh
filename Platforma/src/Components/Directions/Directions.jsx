import './Directions.scss';

import { useContext } from "react";
import { Context } from "../..";
import { useHistory, useLocation } from 'react-router-dom';

const Directions = () => {
    const { directions } = useContext(Context);
    const
        history = useHistory(),
        { pathname } = useLocation();

    const openFacilityesPage = () => {
        history.push('/facilties');
    }
    return <section className="directions">
        <button
            className={pathname === '/facilityes' ? "directions_button button active" : "directions_button button"}
            onClick={openFacilityesPage}
        >Мои проекты</button>
        <h3 className="directions_title title">Направления</h3>
        {directions.directions.map(({title}) =>
            <button
                className="directions_button button"
                key={title}
            >{title}</button>
        )}
    </section>;
};

export default Directions;
