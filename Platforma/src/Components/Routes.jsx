import Admin from '../Pages/Admin';
import Auth from '../Pages/Auth/Auth';
import Workspace from '../Pages/Workspace/Workspace';
import Facilities from '../Pages/Facilityes/Facilityes';
import Workers from '../Pages/Workers/Workers';
import {
    ADMIN_ROUTE, LOGIN_ROUTE,
    REGISTRATION_ROUTE, WORKSPACE_ROUTE,
    FACILITYES_ROUTE, WORKERS_ROUTE
} from '../Utils/Consts';

export const
    authRoutes = [
        {
            path: ADMIN_ROUTE,
            component: <Admin/>
        },
        {
            path: WORKSPACE_ROUTE,
            component: <Workspace/>
        },
        {
            path: FACILITYES_ROUTE,
            component: <Facilities/>
        },
        {
            path: WORKERS_ROUTE,
            component: <Workers/>
        }
    ],
    publicRoutes = [
        {
            path: LOGIN_ROUTE,
            component: <Auth/>
        },
        // {
        //     path: REGISTRATION_ROUTE,
        //     component: <Auth/>,
        // }
    ];
