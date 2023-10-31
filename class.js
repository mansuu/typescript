"use strict";
class Car {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
}
const c = new Car(123, "Hyundai");
console.log("Car", c);
class Ramayana {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    getId() {
        return "123";
    }
    getname() {
        return "Ram Charit Manas";
    }
}
const r = new Ramayana("123", "Ram Charit Manas");
