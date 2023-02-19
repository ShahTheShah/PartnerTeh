import { makeAutoObservable } from "mobx";

export default class CustomersStore {
    constructor() {
        this._customers = [
            {
                id: 1,
                name: 'Shahriori Inc.'
            },
            {
                id: 2,
                name: 'Vadim Inc.'
            },
            {
                id: 3,
                name: 'Dooeff Inc.'
            },
            {
                id: 4,
                name: 'Shahrwefwefiori Inc.'
            },
            {
                id: 5,
                name: 'efShawefwefhrioefwfri Inc.'
            },
        ];
        makeAutoObservable(this);
    }
    setCustomers = customers => {
        this._customers = customers;
    }
    get customers() {
        return this._customers;
    }
}
