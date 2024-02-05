/**
 * Never Type
 */
// (1) 함수를 던질때
function throwError(): never {
  throw Error();
}

//(2) 절대로 끝나지 않는 함수
function infiniteLoop(): never {
  while (true) {}
}

//(3) 존재할 수 없는 인터섹션

type StringAndNumber = string & number;

// let neverType: never = 10;
// let neverType: never = undefined;
// let neverType: never = null;