'use strict';

import database from '../database.js';
import { DataTypes } from 'sequelize';

const Customer = database.define('customer', {
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

export default Customer;
