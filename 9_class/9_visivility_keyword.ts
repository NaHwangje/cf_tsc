/**
 * Visivility Keyword
 * 
 * 1) public (기본값) - 어디서든 접근이 가능하다
 * 2) protected - 현재 클래스 및 하위 (자식) 클래스에서 접근 가능하다.
 * 3) private - 현재 클래스 내부에서만 접근이 가능하다.
 */
class PorpertyTestParent{
    public publicPorperty = 'public property'
    protected protectedPorperty = 'protected property'
    private privatePorperty = 'private property'
    #jsPrivateProperty = 'js private property'

    test(){
        this.publicPorperty
        this.protectedPorperty
        this.privatePorperty
        this.#jsPrivateProperty
    }
}

class PropertyTestChild extends PorpertyTestParent{
    test(){
        this.publicPorperty
        this.protectedPorperty
        // this.privatePorperty
        // this.#jsPrivateProperty
    }
}

const instance = new PropertyTestChild();

instance.publicPorperty;
// instance.protectedPorperty
// instance.privatePorperty
// instance.#jsPrivateProperty