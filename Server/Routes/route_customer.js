'use strict';

import { Router } from 'express';
import controller from '../Controllers/controller.js';

const customerRouter = new Router();

customerRouter.post(  '/create'   ,    controller.CustomerControll.create  );
customerRouter.get(   '/checkAll' ,    controller.CustomerControll.checkAll);
customerRouter.get(   '/check/:id',    controller.CustomerControll.check   );
customerRouter.delete('/:id'      ,    controller.CustomerControll.delete  );

export default customerRouter;
