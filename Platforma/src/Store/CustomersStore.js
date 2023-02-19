import { makeAutoObservable } from "mobx";

export default class CustomersStore {
    constructor() {
        this._customers = [];
        makeAutoObservable(this);
    }
    setCustomers = customers => {
        this._customers = customers;
    }
    get customers() {
        return this._customers;
    }
}
