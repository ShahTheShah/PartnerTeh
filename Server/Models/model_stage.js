'use strict';

import database from '../database.js';
import { DataTypes } from 'sequelize';

const Stage = database.define('stage', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
    },
});

export default Stage;
