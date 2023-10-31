class Car{
    private id : number;
    private name : string;

    constructor(_id:number, _name : string){
        this.id = _id;
        this.name = _name
    }


}

const c : Car = new Car(123, "Hyundai")
console.log("Car", c)

class Ramayana implements Book{
    id: string;
    name: string;
    constructor(_id:string, _name : string){
        this.id = _id;
        this.name = _name;
    }
    getId(): string {
        return "123"
    }
    getname(): string {
        return "Ram Charit Manas"
    }
}

const r = new Ramayana("123", "Ram Charit Manas")