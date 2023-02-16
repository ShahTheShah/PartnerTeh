import React from 'react';
import './Project.scss';
import profilePicture from '../../Assets/Images/admin.jpg';

const Project = () => {
    let stages = [];
    for(let i = 0; i < 10; i++) {
        stages.push(
            <li key={i} className='project-stage'>
                <header className='project-stage-header'>
                    <div className='project-stage_count'>{i + 1}</div>
                    <data className='project-stage_date' dateTime='12.12.2022'>12.12.2022</data>
                </header>
                <h3 className='project-stage_name'>Обследование</h3>
                <footer className='project-stage-worker'>
                    <img className='project-stage-worker_profilePicture' src={profilePicture} alt='Пронь Вадим'/>
                    <h4 className='project-stage-worker_name'>Вадим</h4>
                </footer>
            </li>
        );
    }
    return <section className='project'>
        <h1 className='project_name'>
            Название проекта:&nbsp;
            <span className='project_name--value'>Проект для работы объекта некоего человека</span>
        </h1>
        <h2 className='project_parameters'>
            <span className='project_parameters--before project_parameters--value'>10m</span>
            Параметры
            <span className='project_parameters--after project_parameters--value'>50m</span>
        </h2>
        <ul className='project-stages'>
            {stages}
        </ul>
    </section>;
};

export default Project;
