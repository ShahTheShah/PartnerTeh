import { useContext, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';

// Routes
import { authRoutes, publicRoutes } from '../routes';

// Paths
import Consts from '../Utils/Consts';

// Context
import { Context } from '..';
import Sidebar from './Sidebar/Sidebar';
import MainSidebar from './MainSidebar/MainSidebar';
import { observer } from 'mobx-react-lite';
import { check } from '../HTTP/userAPI';

const AppRouter = observer(() => {
    const { user } = useContext(Context);
    const
        { pathname } = useLocation(),
        history      = useHistory();
    useEffect(() => {
        check().then(data => {
            user.setUser(data);
            user.setIsAuth(true);
            history.push('/')
        })
    }, []);
    return <>
        {pathname !== '/auth' && <Sidebar />}
        <main className={pathname === '/auth' ? 'main main-inAuth' : 'main'}>
            <Switch>
                {user.isAuth && authRoutes.map(({ path, component }) =>
                    <Route key={path} path={path} component={component} exact />
                )}
                {publicRoutes.map(({ path, component }) =>
                    <Route key={path} path={path} component={component} exact />
                )}
                <Redirect to={!user.isAuth ? Consts.AUTH_PATH[0] : Consts.FACILITYES_PATH[0]} />
            </Switch>
            {pathname !== '/auth' && <MainSidebar />}
        </main>
    </>;
});

export default AppRouter;
