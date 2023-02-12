'use strict';

import { Router } from 'express';
import controller from '../Controllers/controller.js';
import middleware from '../Middlewares/middleware.js';

const directionRouter = new Router();

directionRouter.post(  '/create'   ,    middleware.CheckRoleMiddleware('ADMIN'), controller.DirectionControll.create);
directionRouter.get(   '/checkAll' ,    controller.DirectionControll.checkAll);
directionRouter.get(   '/check/:id',    controller.DirectionControll.check   );
directionRouter.delete('/:id'      ,    controller.DirectionControll.delete  );

export default directionRouter;
