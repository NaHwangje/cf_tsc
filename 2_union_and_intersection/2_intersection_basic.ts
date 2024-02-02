/**
 * Intersection
 *
 * And
 */
interface Human {
  name: string;
  age: number;
}

interface Contacts{
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndCantacts: HumanAndContacts = {
    name:'코드팩토리',
    age:32,
    phone:'01012341234',
    address:'서울시'
}

type NumberAndString = number & string; //never타입
