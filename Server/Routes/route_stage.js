'use strict';

import { Router } from 'express';
import controller from '../Controllers/controller.js';

const stageRouter = new Router();

stageRouter.post(  '/create', controller.StageControll.create);
stageRouter.get(   '/:id',    controller.StageControll.check );
stageRouter.delete('/:id',    controller.StageControll.delete);

export default stageRouter;
