import { makeAutoObservable } from "mobx";

export default class Workers {
    constructor() {
        makeAutoObservable();
    };
};