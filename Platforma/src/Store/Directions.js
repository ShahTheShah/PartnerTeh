import { makeAutoObservable } from "mobx";

export default class DirectionsStore {
    constructor() {
        this._directions = [
            {id: 1, title: 'Энергоснабжение'},
            {id: 2, title: 'Газоснабжение'},
            {id: 3, title: 'Сиcтемы связи'}
        ];
        makeAutoObservable(this);
    }
    setFacilityes = directions => {
        this._directions = directions;
    }
    get directions() {
        return this._directions;
    }
}
