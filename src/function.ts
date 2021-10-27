// 함수
// return 이 없으면 void
const add = (num1: number, num2: number): number => num1 + num2;

// 매개변수 옵셔녈
const hello = (name?: string): string => `Hello ${name || 'world'}`;
// 또는
const hello2 = (name = 'world'): string => `Hello ${name}`;


// 선택정 매개 변수가 필수 매개 변수 앞에 올 수 없다.
/*
const hello3 = (age?: number, name: string) => {
    // ...
};
 */

// or
const hello3 = (age: number | undefined, name: string): string => {
    return age ? `${name}. age: ${age}` : `${name}`;
};

// 나머지 매개변수
// const add2 = (...args) => args.reduce((acc, num) => acc + num, 0);
const add2 = (...args: number[]) => args.reduce((acc, num) => acc + num, 0);

// add2(2,3,4,5);

// this의 타입

interface User {
    name: string;
}

const Sam: User = {name: 'Sam'};
// const sayName = function() { return this.name; }; // this 타입이 없어서 오류
const sayName = function(this: User): string {
    return this.name;
};

// 매개변수가 있을 경우
// 전달된 매개변수는 this 다음부터 연결 된다.
const sayName2 = function(this: User, age: number, gender: 'm' | 'f') {
    return `${this.name}, age: ${age}, gender: ${gender}`;
};

// const a = sayName.bind(Sam);
// console.log(a()); // Sam

const a = sayName2.bind(Sam);
// console.log(a(20, 'm'));

// 함수 오버로드
// 전달받은 매개변수의 타입이나 갯수가 다른 동작을 하는 것
interface User2 {
    name: string;
    age: number;
};

/*
const join = (name: string, age: number | string): User2 | string => {
    return typeof age === 'number' ? {name, age} : '나이는 숫자로 입력;'
};

//  리턴이 객체, 또는 스트링으로 반환 되기 때문에 오류 발생
let result = join('haha', 20);
let result2 = join('hoho', '20');
*/

// 오류: 함수 표현식
/*
const join = (name: string, age: number): User2;
const join = (name: string, age: string): string;
const join = (name: string, age: number | string): User2 | string => {
    return typeof age === 'number' ? {name, age} : '나이는 숫자로 입력;'
};
*/

function join(name: string, age: number): User2;
function join(name: string, age: string): string;
function join(name: string, age: number | string): User2 | string {
    return typeof age === 'number' ? {name, age} : '나이는 숫자로 입력;'
};

let result: User2 = join('haha', 20);
let result2: string = join('hoho', '20');

console.log(result);
console.log(result2);