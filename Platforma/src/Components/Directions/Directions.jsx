import './Directions.scss';

import { useContext, useEffect } from "react";
import { Context } from "../..";
import { useHistory, useLocation } from 'react-router-dom';
import { checkAll } from '../../HTTP/directionsAPI';
import { observer } from 'mobx-react-lite';

const Directions = observer(() => {
    const { directions } = useContext(Context);
    const
        history = useHistory(),
        { pathname } = useLocation();

    useEffect(() => {
        checkAll().then(data => directions.setDirections(data));
    }, []);

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
});

export default Directions;
