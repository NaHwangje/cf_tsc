/**
 * Nested Object
 */
type NestedPerson = {
  identity: {
    name: string;
    age: number;
  };
  nationality: string;
};

const codefactory: NestedPerson = {
  identity: {
    name: "코팩",
    age: 32,
  },
  nationality: "한국인",
};

type TPerson = {
  identity: TPersonIdentity;
  nationality: string;
};

type TPersonIdentity = {
  name: string;
  age: number;
};

const iu: TPerson = {
  identity: {
    name: "아이유",
    age: 30,
  },
  nationality: "한국인",
};

interface IPerson {
  identity: IPersonIdentity;
  natrionality: string;
}

interface IPersonIdentity {
  name: string;
  age: number;
};

const yuHJin: IPerson = {
  identity: {
    name: "안유진",
    age: 23,
  },
  natrionality: "한국인",
};
