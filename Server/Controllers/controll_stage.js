'use strict';
import models from "../Models/models.js";

class StageControll {
    create = async (req, res) => {
        const { name } = req.body;
        const stage = await models.Stage.create({ name });
        return res.status(200).json(stage);
    };
    checkAll = async (req, res) => {
        const stages = await models.Stage.findAll();
        return res.status(200).json(stages);
    };
    delete = async (req, res) => {

    };
};

export default new StageControll();
