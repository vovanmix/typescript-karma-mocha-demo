console.log('pr3.ts loaded!');

// Exercise 1
interface Transport {
    name: string;
    acceleration: number;
    honk: () => void;
    accelerate: (n: number) => void;
}

class Car implements Transport {
    public acceleration: number;

    constructor(public name: string) {
        this.acceleration = 0;
    }

    public honk(): void {
        console.log("Toooooooooot!");
    }

    public accelerate (speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
class Figure {
    protected width: number = 0;
    protected length: number = 0;
}
class Rectangle extends Figure {
    constructor(protected width: number, protected length: number) {
        super();
    }

    public calcSize(): number {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle(2, 5);
console.log(rectangle.calcSize());

// Exercise 3
class PersonClass {
    private _firstName: string = "";

    constructor() {}

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}
const person = new PersonClass();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
