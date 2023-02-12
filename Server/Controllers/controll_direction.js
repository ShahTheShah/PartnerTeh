'use strict';

import models   from '../Models/models.js'    ;
import APIError from '../Handlers/APIError.js';

class DirectionControll {
    create = async (req, res) => {
        const { title } = req.body;
        const direction = await models.Direction.create({ title });
        return res.status(200).json(direction);
    };
    checkAll = async (req, res) => {
        const directions = await models.Direction.findAll();
        return res.status(200).json(directions);
    };
    check = async (req, res) => {

    };
    delete = async (req, res) => {

    };
};

export default new DirectionControll();
