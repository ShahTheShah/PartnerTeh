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
import { check, getWorkers } from '../HTTP/userAPI';
import { checkAll as checkAllSpec } from '../HTTP/specializationsAPI';
import { checkAll as checkAllCustomer } from '../HTTP/customerAPI';
import { checkAll as checkAllStage } from '../HTTP/stageAPI';
import { checkAll as checkAllFac } from '../HTTP/facilityesAPI';

const AppRouter = observer(() => {
    const { user, specializations, customers, stages, workers, facilityes } = useContext(Context);
    const
        { pathname } = useLocation(),
        history      = useHistory();
    useEffect(() => {
        check().then(data => {
            user.setUser(data);
            user.setIsAuth(true);
            history.push('/')
        });
        checkAllSpec().then(data => specializations.setSpecializations(data))
        checkAllCustomer().then(data => customers.setCustomers(data))
        checkAllStage().then(data => stages.setStages(data))
        getWorkers().then(data => workers.setWorkers(data))
        checkAllFac().then(data => facilityes.setFacilityes(data))
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
