import React, { useContext } from 'react';
import {
    BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';

import { authRoutes, publicRoutes } from './Routes';
import { LOGIN_ROUTE, WORKSPACE_ROUTE } from '../Utils/Consts';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
    const { user } = useContext(Context)
    // console.log(user)
    return <>
        <Switch>
            {user.isAuth() && authRoutes.map(({path, component}) =>
                <Route key={path} exact={true} path={path}>
                    {component}
                </Route>
            )}
            {publicRoutes.map(({path, component}) =>
                <Route key={path} path={path}>
                    {component}
                </Route>
            )}
            <Redirect to={user.isAuth() ? WORKSPACE_ROUTE : LOGIN_ROUTE}/>
        </Switch>
    </>;
});

export default AppRouter;
