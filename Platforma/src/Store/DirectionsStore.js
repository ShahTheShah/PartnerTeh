import { makeAutoObservable } from "mobx";

export default class DirectionsStore {
    constructor() {
        this._directions = [];
        makeAutoObservable(this);
    }
    setDirections = directions => {
        this._directions = directions;
    }
    get directions() {
        return this._directions;
    }
}
