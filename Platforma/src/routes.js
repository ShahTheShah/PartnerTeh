// Components
import Facilityes from './Pages/Facilityes/Facilityes';
import Customers  from './Pages/Customers/Customers'  ;
import Workers    from './Pages/Workers/Workers'      ;
import Auth       from './Pages/Auth/Auth'            ;

// Paths
import Consts from './Utils/Consts';


export const
    authRoutes = [
        {
            path: Consts.FACILITYES_PATH[0],
            component: Facilityes,
            title: Consts.FACILITYES_PATH[1]
        },
        {
            path: Consts.CUSTOMERS_PATH[0],
            component: Customers,
            title: Consts.CUSTOMERS_PATH[1]
        },
        {
            path: Consts.WORKERS_PATH[0],
            component: Workers,
            title: Consts.WORKERS_PATH[1]
        },
    ],
    publicRoutes = [
        {
            path: Consts.AUTH_PATH[0],
            component: Auth,
            title: Consts.AUTH_PATH[1]
        }
    ];
