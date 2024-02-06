/**
 * Interface
 */
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

class Dog implements Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  jump() {
    return `${this.name}이 점프를 합니다.`;
  }

  dance() {}
}

const ori: any = new Dog("오리", 3);

function instanceOfAnimal(object: any): object is Animal {
  return "jump" in object;
}

if (instanceOfAnimal(ori)) {
  ori;
}
/**
 * 다중 인터페이스 구현
 */
interface Pet {
  legsCount: number;
  bark(): void;
}

class Cat implements Animal, Pet{
    //Animmal
    name: string;
    age: number;
    jump(): string {
        return `${this.name}이 점프를 합니다.`
    }

    //Pet
    legsCount: number;

    constructor(name:string, age: number, legsCounter:number){
        this.name = name
        this.age = age
        this.legsCount=legsCounter
    }
    bark(): void {
        console.log('야옹');
        
    }
}

type AnimalAndPet = Animal & Pet;
class Cat2 implements AnimalAndPet{
    //Animmal
    name: string;
    age: number;
    jump(): string {
        return `${this.name}이 점프를 합니다.`
    }

    //Pet
    legsCount: number;

    constructor(name:string, age: number, legsCounter:number){
        this.name = name
        this.age = age
        this.legsCount=legsCounter
    }
    bark(): void {
        console.log('야옹');
        
    }
}

interface WrongInterface1{
    name: string;
}

interface WrongInterface2{
    name: number;
}

// class name implements WrongInterface1, WrongInterface2{
// name: string;
// name: number;
// name: string|number;
// }

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name=name;
        this.age= age;
    }
}

interface IdolConstructor{
    new (name: string, age: number):Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number){
    // return new Idol(name, age)
     return new constructor(name, age)

}
console.log(createIdol(Idol, '아이유', 32))

