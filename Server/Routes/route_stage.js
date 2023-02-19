'use strict';

import { Router } from 'express';
import controller from '../Controllers/controller.js';
import middleware from '../Middlewares/middleware.js';

const stageRouter = new Router();

stageRouter.post(  '/create', middleware.CheckRoleMiddleware('ADMIN'), controller.StageControll.create);
stageRouter.get(   '/checkAll',    controller.StageControll.checkAll );
// stageRouter.get(   '/:id',    controller.StageControll.check );
stageRouter.delete('/:id',    controller.StageControll.delete);

export default stageRouter;
