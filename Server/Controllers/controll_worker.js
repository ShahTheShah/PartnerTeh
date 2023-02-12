'use strict';

import APIError from '../Handlers/APIError.js';

class WorkerControll {
    registration = async (req, res) => {

    };
    login = async (req, res) => {

    };
    auth = async (req, res, next) => {
        const {id} = req.query;
        if(!id) {
            return next(APIError.badRequest('Неверно указан id работника!'));
        };
        res.status(200).json('Hello')
    };
    delete = async (req, res) => {

    };
};

export default new WorkerControll();
