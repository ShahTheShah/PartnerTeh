import { makeAutoObservable } from "mobx";

export default class Facilityes {
    constructor() {
        makeAutoObservable(this);
    };
}
