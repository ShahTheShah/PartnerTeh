'use strict';

import database from '../database.js';
import { DataTypes } from 'sequelize';

const Direction = database.define('direction', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
});

export default Direction;
