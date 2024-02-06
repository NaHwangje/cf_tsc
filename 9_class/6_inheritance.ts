/**
 * Inheritance
 */
class Parent {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  dance() {
    console.log(`parant: ${this.name}이 춤을 춥니다.`);
  }
}

class Child extends Parent {
  age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
  sing() {
    console.log(`child: ${this.name} 이 노래를 부릅니다.`);
  }
}

const codefactory = new Parent("코드팩토리");
const ahri = new Child("아리", 12);

codefactory.dance();
// codefactory.sing();

ahri.dance();
ahri.sing();

let person: Parent;
person = codefactory;
person = ahri;

let person2: Child;
// person2 = codefactory
person2 = ahri;

/**
 * optional 프로퍼티를 유의하자
 */
class Parent2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Child2 extends Parent2 {
  age?: number;
  constructor(name: string, age?: number) {
    super(name);
    this.age = age;
  }
}

const cf2 = new Parent2('코드팩토리')
const ahri2 = new Child2('아리', 20)

let child: Child2;
child = ahri2;
child = cf2; // 옶셔널이라 만약 값이 없으면 부모를 자식으로 넣을 수 있음