import { makeAutoObservable } from "mobx";

export default class FacilityesStore {
    constructor() {
        this._facilityes = [];
        makeAutoObservable(this);
    }
    setFacilityes = facilityes => {
        this._facilityes = facilityes;
    }
    get facilityes() {
        return this._facilityes;
    }
}
