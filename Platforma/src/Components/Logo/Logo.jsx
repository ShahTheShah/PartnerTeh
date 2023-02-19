import './Logo.scss';
import logo_path from '../../logo.svg';

const Logo = () => {
    return <div className='logo__wrapper'>
        <img
            src={logo_path}
            alt='ООО "Партнер"'
            className="logo" />
    </div>;
};

export default Logo;
