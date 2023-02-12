'use strict';

import database from '../database.js';
import { DataTypes } from 'sequelize';

const WorkerDirection = database.define('workerDirection', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

export default WorkerDirection;
