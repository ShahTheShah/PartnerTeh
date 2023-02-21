'use strict';

import APIError from '../Handlers/APIError.js';
import models from '../Models/models.js';
import bcrypt from 'bcrypt';
import JSONWebToken from 'jsonwebtoken';
(await import('dotenv')).config();

const
    GenerateJSONWebToken = (id, email, role) => JSONWebToken.sign(
        { id, email, role },
        process.env.SECRET_JSONWebToken_KEY,
        {
            expiresIn: '24h'
        }
    ),
    generatePassword = () => {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

class WorkerControll {
    create = async (req, res, next) => {
        const {
            email, firstName,  lastName, patronymic, specializations, role
        } = req.body;
        if (!email) {
            return next(APIError.badRequest('Не введена почта или пароль!'));
        }

        const candidate = await models.Worker.findAll({ where: { email } });
        if (candidate != 0) return next(APIError.badRequest('Такой пользователь уже существует!'));
        const password = generatePassword();
        const hashPassword = await bcrypt.hash(password, 5);
        const worker = await models.Worker.create({
            email, password: hashPassword, role, firstName, lastName, patronymic, specializations
        });
        // const WorkerToken = GenerateJSONWebToken(worker.id, worker.email, worker.role);
        return res.status(200).json({ password });
    };
    login = async (req, res, next) => {
        const { email, password } = req.body;
        const worker = await models.Worker.findAll({ where: { email } });

        if (worker.length == 0) return next(APIError.internal('Такого пользователя не существует!'));
        let comparePassword = bcrypt.compareSync(password, worker[0].password);

        if (!comparePassword) return next(APIError.internal('Неверно указан пароль!'));

        const WorkerToken = GenerateJSONWebToken(worker[0].id, worker[0].email, worker[0].role);
        return res.status(200).json({ WorkerToken });
    };
    check = async (req, res, next) => {
        const NewWorkerToken = GenerateJSONWebToken(req.user.id, req.user.email, req.user.role);
        res.status(200).json({ WorkerToken: NewWorkerToken })
    };
    getWorker = async (req, res, next) => {

    }
    getWorkers = async (req, res, next) => {
        let workers = await models.Worker.findAll();
        workers = workers.map(worker => {
            worker.password = 'Никакого пароля, молодой человек!';
            return worker;
        })
        return res.status(200).json({ workers })
    }
    delete = async (req, res) => {

    };
};

export default new WorkerControll();
