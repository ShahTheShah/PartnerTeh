'use strict';

import APIError from '../Handlers/APIError.js';
import models from '../Models/models.js';
import bcrypt from 'bcrypt';
import JSONWebToken from 'jsonwebtoken';
(await import('dotenv')).config();

const GenerateJSONWebToken = (id, email, role) => JSONWebToken.sign(
    { id, email, role },
    process.env.SECRET_JSONWebToken_KEY,
    {
        expiresIn: '24h'
    }
);

class WorkerControll {
    registration = async (req, res, next) => {
        const {
            email, password, role, firstName, lastName, patronymic
        } = req.body;
        if (!email || !password) {
            return next(APIError.badRequest('Не введена почта или пароль!'));
        }

        const candidate = await models.Worker.findAll({ where: { email } });
        if (!candidate) return next(APIError.badRequest('Такой пользователь уже существует!'));

        const hashPassword = await bcrypt.hash(password, 5);
        const worker = await models.Worker.create({
            email, password: hashPassword, role, firstName, lastName, patronymic
        });
        const WorkerToken = GenerateJSONWebToken(worker.id, worker.email, worker.role);
        return res.status(200).json({ WorkerToken });
    };
    login = async (req, res) => {
        const { email, password } = req.body;
        const worker = await models.Worker.findAll({ where: { email } });

        if(!worker) return next(APIError.internal('Такого пользователя не существует!'));
        console.log(password, worker.password)
        let comparePassword = bcrypt.compareSync(password, worker.password);

        if(!comparePassword) return next(APIError.internal('Неверно указан пароль!'));

        const JSONWebToken = GenerateJSONWebToken(worker.id, worker.email, worker.role);
        return res.status(200).json({ JSONWebToken });
    };
    auth = async (req, res, next) => {
        const { id } = req.query;
        if (!id) {
            return next(APIError.badRequest('Неверно указан id работника!'));
        };
        res.status(200).json('Hello')
    };
    delete = async (req, res) => {

    };
};

export default new WorkerControll();
