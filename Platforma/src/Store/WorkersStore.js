import { makeAutoObservable } from "mobx";

export default class WorkersStore {
    constructor() {
        this._workers = [];
        makeAutoObservable(this);
    }
    setWorkers = workers => {
        this._workers = workers;
    }
    get workers() {
        return this._workers;
    }
}
