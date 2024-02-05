/**
 * Extension
 */
interface IName {
  name: string;
}

interface IIdol extends IName {
  age: number;
}

const idol: IIdol = {
  name: "안유진",
  age: 23,
};

type TName = {
  name: string;
};
type TIdol = TName & {
  age: number;
};

const idol2: TIdol = {
  name: "아이유",
  age: 29,
};

interface IIdol2 extends TName {
  age: number;
}

const idol3: IIdol2 = {
  name: "제니",
  age: 29,
};

type TIdol2 = IName & {
  age: number;
};
const idol4: TIdol2 = {
  name: "지수",
  age: 31,
};

/**
 * extending multiple
 */
type DogName = {
  name: string;
};
type DogAge = {
  age: number;
};
type DogBreed = {
  breed: string;
};
type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
  name: "codefactory",
  age: 31,
  breed: "Poodle",
};

interface CatName {
  name: string;
}
interface CatAge {
  age: number;
}
interface Cat extends CatAge, CatName {
  breed: string;
}

const cat: Cat = {
  name: "오리",
  age: 7,
  breed: "코리안 냥냥이",
};

/**
 * Overridng
 */
type THeight = {
  height: number | string;
};
type TRectangle = THeight & {
  height: number;
  width: number;
};

const ractangle: TRectangle = {
  height: 200,
  width: 100,
};

interface IHeight {
  height: string | number;
}

interface IRectangle extends IHeight {
  height: number;
  width: number;
}
