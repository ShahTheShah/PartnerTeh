import React from 'react';
import './WorkerData.scss';

import profilePicture from '../../Assets/Images/admin.jpg';

const WorkerData = () => {
    return <section className='worker-data'>
        <div>
            <h2 className='worker-data_name'>Пронь Вадим</h2>
            <h3 className='worker-data_role'>Администратор</h3>
        </div>
        <img className='worker-data_profilePicture' src={profilePicture} alt='Пронь Вадим'/>
    </section>;
};

export default WorkerData;
