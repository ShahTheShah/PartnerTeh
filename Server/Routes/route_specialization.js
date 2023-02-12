'use strict';

import { Router } from 'express';
import controller from '../Controllers/controller.js';

const specializationRouter = new Router();

specializationRouter.post(  '/create'   ,    controller.SpecializationControll.create   );
specializationRouter.get(   '/checkAll' ,    controller.SpecializationControll.checkAll );
specializationRouter.get(   '/check/:id',    controller.SpecializationControll.check    );
specializationRouter.delete('/:id'      ,    controller.SpecializationControll.delete   );

export default specializationRouter;
