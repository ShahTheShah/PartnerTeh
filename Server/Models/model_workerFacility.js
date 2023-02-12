'use strict';

import database from '../database.js';
import { DataTypes } from 'sequelize';

const WorkerFacuility = database.define('workerFacility', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

export default WorkerFacuility;
