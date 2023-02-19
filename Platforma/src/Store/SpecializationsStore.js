import { makeAutoObservable } from "mobx";

export default class SpecializationsStore {
    constructor() {
        this._specializations = [];
        makeAutoObservable(this);
    }
    setSpecializations = specializations => {
        this._specializations = specializations;
    }
    get specializations() {
        return this._specializations;
    }
}
