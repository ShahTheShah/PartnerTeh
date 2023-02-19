import { makeAutoObservable } from "mobx";

export default class SpecializationsStore {
    constructor() {
        this._specializations = [
            {id: 1, title: 'Обследование'},
            {id: 2, title: 'Геодезия'},
            {id: 3, title: 'Проект'},
            {id: 4, title: 'Печать'},
            {id: 5, title: 'Согласование'},
            {id: 6, title: 'Сметы'},
        ];
        makeAutoObservable(this);
    }
    setFacilityes = specializations => {
        this._specializations = specializations;
    }
    get specializations() {
        return this._specializations;
    }
}
