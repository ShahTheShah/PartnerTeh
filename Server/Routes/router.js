'use strict';

import { Router }           from 'express'                  ;
import workerRouter         from './route_worker.js'        ;
import facilityRouter       from './route_facility.js'      ;
import directionRouter      from './route_direction.js'     ;
import specializationRouter from './route_specialization.js';
import stageRouter          from './route_stage.js'         ;
import customerRouter       from './route_customer.js'      ;

const router = new Router();

router.use('/worker'        , workerRouter        );
router.use('/facility'      , facilityRouter      );
router.use('/specialization', specializationRouter);
router.use('/direction'     , directionRouter     );
router.use('/stage'         , stageRouter         );
router.use('/customer'      , customerRouter      );

export default router;
