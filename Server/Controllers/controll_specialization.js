'use strict';

import models   from '../Models/models.js'    ;
import APIError from '../Handlers/APIError.js';

class SpecializationControll {
    create = async (req, res) => {
        const { title } = req.body;
        const specialization = await models.Specialization.create({ title });
        return res.status(200).json(specialization);
    };
    check = async (req, res) => {

    };
    checkAll = async (req, res) => {
        const specializations = await models.Specialization.findAll();
        return res.status(200).json(specializations);
    };
    delete = async (req, res) => {

    };
};

export default new SpecializationControll();
