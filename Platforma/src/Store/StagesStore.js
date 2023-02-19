import { makeAutoObservable } from "mobx";

export default class StagesStore {
    constructor() {
        this._stages = [];
        makeAutoObservable(this);
    }
    setStages = stages => {
        this._stages = stages;
    }
    get stages() {
        return this._stages;
    }
}
