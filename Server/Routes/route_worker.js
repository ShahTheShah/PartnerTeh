'use strict';

import { Router } from 'express';
import controller from '../Controllers/controller.js';
import middleware from '../Middlewares/middleware.js';

const workerRouter = new Router();

workerRouter.post(  '/create',        middleware.CheckRoleMiddleware('ADMIN'), controller.WorkerControll.create);
workerRouter.post(  '/login' ,        controller.WorkerControll.login       );
workerRouter.get(   '/check' ,        middleware.AuthMiddleware, controller.WorkerControll.check);
workerRouter.get(   '/getWorker/:id', middleware.AuthMiddleware, controller.WorkerControll.getWorker);
workerRouter.get(   '/getWorkers',    controller.WorkerControll.getWorkers);
workerRouter.delete('/:id'   ,        controller.WorkerControll.delete      );

export default workerRouter;
