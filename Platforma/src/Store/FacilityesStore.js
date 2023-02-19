import { makeAutoObservable } from "mobx";

export default class FacilityesStore {
    constructor() {
        this._facilityes = [
            {
                id: 1,
                name: 'Проект для меня!',
                address: 'Краснодар, ул. Пушкина, дом Колотушкина',
                parameters: ['10m', '30m'],
                contractNumber: '123123434123',
                completionDate: '12.03.2003',
                customer: 'Shahriori Inc.',
                workers: ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
                price: 123233,
                isActive: true,
                isCompleted: false,
                isConcelled: false,
            },
            {
                id: 2,
                name: 'Проект для меня!',
                address: 'Краснодар, ул. Пушкина, дом Колотушкина',
                parameters: ['10m', '30m'],
                contractNumber: '123123434123',
                completionDate: '12.03.2003',
                customer: 'Shahriori Inc.',
                workers: ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
                price: 123233,
                isActive: true,
                isCompleted: false,
                isConcelled: false,
            },
            {
                id: 3,
                name: 'Проект для меня!',
                address: 'Краснодар, ул. Пушкина, дом Колотушкина',
                parameters: ['10m', '30m'],
                contractNumber: '123123434123',
                completionDate: '12.03.2003',
                customer: 'Shahriori Inc.',
                workers: ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
                price: 123233,
                isActive: true,
                isCompleted: false,
                isConcelled: false,
            },
            {
                id: 4,
                name: 'Проект для меня!',
                address: 'Краснодар, ул. Пушкина, дом Колотушкина',
                parameters: ['10m', '30m'],
                contractNumber: '123123434123',
                completionDate: '12.03.2003',
                customer: 'Shahriori Inc.',
                workers: ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
                price: 123233,
                isActive: true,
                isCompleted: false,
                isConcelled: false,
            },
        ];
        makeAutoObservable(this);
    }
    setFacilityes = facilityes => {
        this._facilityes = facilityes;
    }
    get facilityes() {
        return this._facilityes;
    }
}
