import { makeAutoObservable } from "mobx";

export default class User {
    constructor() {
        this._isAuth = true;
        this._user = {};
        makeAutoObservable(this);
    };
    setIsAuth = isAuth => {
        this._isAuth = isAuth;
    }
    setUser = user => {
        this._user = user;
    }

    isAuth = () => this._isAuth;
    user = () => this._user;
}
