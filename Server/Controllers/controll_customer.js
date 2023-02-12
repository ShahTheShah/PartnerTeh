'use strict';

import models   from '../Models/models.js'    ;
import APIError from '../Handlers/APIError.js';

class CustomerControll {
    create = async (req, res) => {
        const { name } = req.body;
        const customer = await models.Customer.create({ name });
        return res.status(200).json(customer);
    };
    check = async (req, res) => {

    };
    checkAll = async (req, res) => {
        const customers = await models.Customer.findAll();
        return res.status(200).json(customers);
    };
    delete = async (req, res) => {

    };
};

export default new CustomerControll();
