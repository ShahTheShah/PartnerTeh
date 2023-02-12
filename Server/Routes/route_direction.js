'use strict';

import { Router } from 'express';
import controller from '../Controllers/controller.js';

const directionRouter = new Router();

directionRouter.post(  '/create'   ,    controller.DirectionControll.create  );
directionRouter.get(   '/checkAll' ,    controller.DirectionControll.checkAll);
directionRouter.get(   '/check/:id',    controller.DirectionControll.check   );
directionRouter.delete('/:id'      ,    controller.DirectionControll.delete  );

export default directionRouter;
