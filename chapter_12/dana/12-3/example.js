class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super();
        this._id = id;
        this._name = name;
        this._monthlyCost = monthlyCost;
    }
}

class Departments extends Party {
    constructor(name, staff) {
        super();
        this._name = name;
        this._staff = staff;
    }
}