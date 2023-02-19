'use strict';

import database from '../database.js';
import { DataTypes } from 'sequelize';

const Worker = database.define('worker', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    patronymic: {
        type: DataTypes.STRING,
    },
    profilePicture: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
    specializations: {
        type: DataTypes.JSON,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'WORKER'
    },
});

export default Worker;
