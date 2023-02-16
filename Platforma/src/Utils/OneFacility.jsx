import { makeAutoObservable } from "mobx";

export default class OneFacility {
    _id;
    _name;
    _address;
    _title;
    _contractNumber;
    _completionDate;
    _price;
    _isActive;
    _isConcelled;
    _isCompleted;
    constructor() {
        makeAutoObservable(this);
    };

    setName = name => {
        this._name = name;
    }
    setAddress = address => {
        this._address = address;
    }
    setTitle = title => {
        this._title = title;
    }
    setContractNumber = contractNumber => {
        this._contractNumber = contractNumber;
    }
    setCompletionDate = completionDate => {
        this._completionDate = completionDate;
    }
    setPrice = price => {
        this._price = price;
    }
    setIsActive = isActive => {
        this._isActive = isActive;
    }
    setIsConcelled = isConcelled => {
        this._isConcelled = isConcelled;
    }
    setIsCompleted = isCompleted => {
        this._isCompleted = isCompleted;
    }
}
