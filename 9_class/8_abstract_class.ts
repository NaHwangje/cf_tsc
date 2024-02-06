/**
 * Abstract class
 * 메소드의 구현을 강제화 한다. 직접적인 클래스나 객체의 생성을 막는다
 */
abstract class ModelWithId{
    id: number;

    constructor(id:number){
        this.id = id;
    }
}

// const ModelWithId = new ModelWithId(123)

class Product extends ModelWithId {
    
}

const product = new Product(1)
product.id;

abstract class ModelWithAbstractMethod{
    abstract shout(name:string):string
}

class Person extends ModelWithAbstractMethod{
    shout(name: string): string {
        return `소리질러`
    }
}