'use strict';

import APIError from '../Handlers/APIError.js';


export default (error, req, res, next) => {
    if(error instanceof APIError) {
        return res.status(error.status).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Непредвиденая ошибка на стороне сервера!' });
}
