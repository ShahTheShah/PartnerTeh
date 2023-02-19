import './index.scss'

import React, { createContext } from 'react'           ;
import ReactDOM                 from 'react-dom/client';

// Components
import App from './App';

// Stores
import CustomersStore  from './Store/CustomersStore' ;
import FacilityesStore from './Store/FacilityesStore';
import UserStore       from './Store/UserStore'      ;
import WorkersStore    from './Store/WorkersStore'   ;
import DirectionsStore from './Store/DirectionsStore';
import SpecializationsStore from './Store/SpecializationsStore';
import StagesStore from './Store/StagesStore';

export const
    Context = createContext(null);

ReactDOM.createRoot(document.getElementById('workspace'))
    .render(
        <Context.Provider value={{
            user           : new UserStore()           ,
            facilityes     : new FacilityesStore()     ,
            workers        : new WorkersStore()        ,
            customers      : new CustomersStore()      ,
            directions     : new DirectionsStore()     ,
            specializations: new SpecializationsStore(),
            stages         : new StagesStore()         ,
        }}>
            <App />
        </Context.Provider>
    );
