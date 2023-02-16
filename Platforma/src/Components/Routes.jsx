import Admin from '../Pages/Admin';
import Auth from '../Pages/Auth/Auth';
import Workspace from '../Pages/Workspace/Workspace';
import {
    ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, WORKSPACE_ROUTE
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
