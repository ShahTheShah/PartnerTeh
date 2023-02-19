'use strict';

import database from '../database.js';
import { DataTypes } from 'sequelize';

const Facility = database.define('facility', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    parameters: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contractNumber: {
        type: DataTypes.STRING,
    },
    completionDate: {
        type: DataTypes.DATE,
    },
    stages: {
        type: DataTypes.JSON,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    isConcelled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

export default Facility;
