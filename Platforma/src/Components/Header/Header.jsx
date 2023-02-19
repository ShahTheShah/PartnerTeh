import './Header.scss';
import Logo from '../Logo/Logo';
import { useLocation } from 'react-router-dom';
import Consts from '../../Utils/Consts';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../..';

const Header = observer(() => {
    const {pathname} = useLocation();
    const { user } = useContext(Context);
    return <header className="header">
        <Logo />
        <h2 className="header_title title">
            {Object.keys(Consts)
                .map(key => Consts[key][0] === pathname && Consts[key][1]
            )}
        </h2>
        {user.isAuth && <p>UserData</p>}
    </header>;
});

export default Header;
