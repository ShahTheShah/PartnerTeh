'use strict';
import JSONWebToken from 'jsonwebtoken';
(await import('dotenv')).config();

export default role => (req, res, next) => {
    if(req.method === 'OPTIONS') next();

    try {
        const WorkerToken = req.headers.authorization.split(' ')[1];
        if(!WorkerToken) res.status(401).json({ message: 'Пользователь на авторизован!' });

        const DecodeJSONWebToken = JSONWebToken.verify(WorkerToken, process.env.SECRET_JSONWebToken_KEY);
        if(DecodeJSONWebToken.role !== role) return res.status(403).json({ message: 'У вас нет доступа!' });
        req.user = DecodeJSONWebToken;
        next();
    } catch(error) {
        console.log('!WorkerToken')
        res.status(401).json({ message: 'Пользователь на авторизован!' });
    }
};
