import './Auth.scss';
import { useContext, useState } from "react";
import { login } from '../../HTTP/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { useHistory } from 'react-router-dom';

const Auth = observer(() => {
    const
        { user } = useContext(Context),
        history = useHistory();
    const
        [email, setEmail]       = useState(''),
        [password, setPassword] = useState(''),
        [message, setMessage]   = useState('');

    const SignIn = async () => {
        try {
            const response = await login({email, password});
            user.setUser(response);
            user.setIsAuth(true);
            history.push('/');
        } catch(error) {
            setMessage(error.response.data.message)
        }
    }

    return <div className="auth">
        <form
            className="auth-form"
            onSubmit={_e => _e.preventDefault()}
        >
            <main className="auth-form-main">
                <input
                    placeholder="Введите вашу почту..."
                    type="email"
                    name="user_email"
                    className="auth-form_input input"
                    value={email}
                    onChange={_e => setEmail(_e.target.value)}
                />
                <input
                    placeholder="Введите ваш пароль..."
                    type="password"
                    name="user_password"
                    className="auth-form_input input"
                    value={password}
                    onChange={_e => setPassword(_e.target.value)}
                />
            </main>
            <footer className="auth-form-footer">
                <p className="auth-form_message">{message}</p>
                <div className="auth-form-submit__wrapper">
                    <p className="auth-form_text">Не получается войти? Уточните пароль у администратора.</p>
                    <button
                        type="submit"
                        className="auth-form-submit button outline"
                        onClick={SignIn}
                    >
                        Войти
                    </button>
                </div>
            </footer>
        </form>
    </div>;
});

export default Auth;
