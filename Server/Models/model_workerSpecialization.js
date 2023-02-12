'use strict';

import database from '../database.js';
import { DataTypes } from 'sequelize';

const WorkerSpecialization = database.define('workerSpecialization', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

export default WorkerSpecialization;
