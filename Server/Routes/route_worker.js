'use strict';

import { Router } from 'express';
import controller from '../Controllers/controller.js';

const workerRouter = new Router();

workerRouter.post(  '/registration', controller.WorkerControll.registration);
workerRouter.post(  '/login' ,       controller.WorkerControll.login       );
workerRouter.get(   '/auth'  ,       controller.WorkerControll.auth        );
workerRouter.delete('/:id'   ,       controller.WorkerControll.delete      );

export default workerRouter;
