import React from 'react';
import './Directions.scss';

const Directions = () => {
    return <section className='directions'>
        <button className="direction_button control active">Электроснабжение</button>
        <button className="direction_button control">Газоснабжение</button>
        <button className="direction_button control">Системы связи</button>
    </section>;
};

export default Directions;
