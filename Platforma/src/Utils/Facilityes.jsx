import { makeAutoObservable } from "mobx";

export default class Facilityes {
    constructor() {
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
