import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import User from './Utils/User';
// import {Switch}

export const Context = createContext(null);

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<>
        <Context.Provider value={{
            user: new User()
        }}>
            <App />
        </Context.Provider>
    </>);
