'use strict';

import express           from 'express';
import cors              from 'cors'   ;
import path              from 'path'   ;
import cookieParser      from 'cookie-parser'     ;
import fileUpload        from 'express-fileupload';
import { fileURLToPath } from 'url'    ;

import database   from './database.js'     ;
import models     from './Models/models.js';
import router     from './Routes/router.js';
import middleware from './Middlewares/middleware.js';

(await import('dotenv')).config();

const
    PORT = process.env.PORT || 5000,
    server = express();

server.use(express.json());
server.use(express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'Static')))
server.use(fileUpload({}));
server.use(cookieParser());
server.use(cors());

server.use('/api', router);

// ! ERRORS
server.use(middleware.ErrorHandlingMiddleware);

(async () => {
    try {
        await database.authenticate();
        await database.sync();
        server.listen(PORT, () => console.log(`Server listen in ${PORT} port!`));
    } catch(error) {
        console.error(error);
    }
})();
