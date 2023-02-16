import React, { useContext } from 'react';
import './Auth.scss';

import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

const Auth = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();
    return <>
        <section className='auth'>
            <header className='auth-header header'>
                <h1 className='auth_title'>Авторизация</h1>
            </header>
            <form action="" className="auth-form">
                <input className='auth-form_controll' type='email' placeholder='Введите ваш email...'/>
                <input className='auth-form_controll' type='password' placeholder='Введите ваш пароль...'/>
                <footer className="auth-form-footer">
                    <span className="auth-form_text">
                        Нету аккаунта? Попросите администратора вас добавить!
                    </span>
                    <button
                        type="submit"
                        className="auth-form_submit control outline blue"
                        onClick={() => {
                            user.setIsAuth(true);
                            history.push('/')
                        }}
                        > Войти
                    </button>
                </footer>
            </form>
        </section>
    </>;
});

export default Auth;
