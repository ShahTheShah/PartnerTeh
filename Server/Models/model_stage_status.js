'use strict';

import database from '../database.js';
import { DataTypes } from 'sequelize';

const stagesStatus = database.define('stages_status', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    statuses: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    }
});

export default stagesStatus;
