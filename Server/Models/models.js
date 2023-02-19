'use strict';

import Worker           from './model_worker.js'          ;
import Facility         from './model_facilti.js'         ;
import Customer         from './model_customer.js'        ;
import Specialization   from './model_specialization.js'  ;
import Direction        from './model_direction.js'       ;
import Stage            from './model_stage.js'           ;
// import stagesStatus    from './model_stage_status.js'  ;

// import WorkerFacuility      from './model_workerFacility.js'      ;
// import WorkerDirection      from './model_workerDirection.js'     ;
// import WorkerSpecialization from './model_workerSpecialization.js';


// Worker.belongsToMany(Facility, { through:  WorkerFacuility});
// Facility.belongsToMany(Worker, { through: WorkerFacuility });

// Worker.belongsToMany(Direction, { through: WorkerDirection });
// Direction.belongsToMany(Worker, { through: WorkerDirection });

// Worker.belongsToMany(Specialization, { through: WorkerSpecialization });
// Specialization.belongsToMany(Worker, { through: WorkerSpecialization });

// Facility.hasOne(stagesStatus), { as: 'stages' };
// stagesStatus.belongsTo(Facility);

Customer.hasMany(Facility);
Facility.belongsTo(Customer);

Direction.hasMany(Facility);
Facility.belongsTo(Direction);


export default {
    Worker,
    Facility,
    Customer,
    Specialization,
    Direction,
    Stage
};
