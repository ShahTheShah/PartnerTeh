'use strict';

import { Router } from 'express';
import controller from '../Controllers/controller.js';

const facilityRouter = new Router();

facilityRouter.post(  '/create'   , controller.FacilityControll.create      );
facilityRouter.get(   '/checkAll' ,    controller.FacilityControll.checkAll );
facilityRouter.get(   '/check/:id',    controller.FacilityControll.check    );
facilityRouter.delete('/:id'      ,    controller.FacilityControll.delete   );

export default facilityRouter;
