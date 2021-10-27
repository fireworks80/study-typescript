// 프로퍼티를 정의해서 객체를 사용하고자 할때
// interface를 사용
{
    var user = void 0;
    user = {
        name: 'xx',
        age: 20
    };
}
// object에는 특정 속성에 대한 정보가 없으므로
// object 에는 name이 없다
// console.log(user.name);  error
// CASE 1:
/*
interface User {
    name: string;
    age: number;
}

let user2: User = {
    name: 'dd',
    age: 20
};

console.log(user2.name);


user2.age = 10; // 같은 number type 이므로 문제 없음

// interface gender에 관한 정보가 없으므로 error
// user2.gender = 'male';

*/
// CASE 2:
// interface에는 gender 타입이 있지만
// user객체에는 gender가 없고
// 나중에 user.gender로 추가 해주게 되면 error 발생
// gender를 옵셔녈로 수정 전
/*
interface User {
    name: string;
    age: number;
    gender: string;
}

let user: User = {
    name: 'dd',
    age: 10,
};

user.gender = 'male';
 */
// gender 프로퍼티를 옵셔널로 수정 후
// interface에서 gender -> gender? 로 변경 후
// 객체 선언 이 후 user.gender로 추가 해도 오류 없음
// interface 에서 gender를 옵셔널로 설정 (gender?)
// (해당 프로퍼티가 있어도 되고 없어도 된다는 의미)
{
    var user = {
        name: 'dd',
        age: 10
    };
    user.gender = 'male';
}
// readonly
// 읽을 수만 있음
// 최소 생성 할때만 할당이 가능
{
    var user = {
        name: 'dd',
        age: 10,
        birthYear: 2000
    };
    // user.birthYear = 1999; birtyYear는 readonly 이므로 수정 불가
}
// 여러가지 추가해야 될 속성이 생길때
// ex) 학년별로 점수를 넣어줘야 한다.
{
    /*
    interface User {
        name: string;
        age: number;
        gender?: string;
        readonly birthYear: number;
        1: string;
        2: string;
        3: string;
        4: string;
    }

    // case: 2학년 dd의 성적을 추가하기
    let user: User = {
        name: 'dd',
        age: 20,
        birthYear: 1999,
        2: 'A'
    };
    */
    // 1,3, 4 학년의 속성이 없으므로 오류
    // 대책
    // 1. 1,2,3,4 를 옵셔널로 설정
    // 2. 문자열 인덱스 서명을 추가한다.
    // interface User {
    //     name: string;
    //     age: number;
    //     gender?: string;
    //     readonly birthYear: number;
    //     [grade: number]: string; // grade는 원하는 프로퍼티명으로
    // }
    var user = {
        name: 'dd',
        age: 20,
        birthYear: 1999,
        2: 'A',
        4: 'B'
    };
}
// 함수
{
    var add = function (x, y) { return x + y; };
    add(10, 20);
    var isAdult = function (age) { return age > 19; };
    isAdult(20);
}
// implements 클래스 정의 할때
{
    var Bmw = /** @class */ (function () {
        function Bmw(color) {
            this.wheels = 4;
            this.color = color;
        }
        Bmw.prototype.start = function () { };
        return Bmw;
    }());
    var bmw = new Bmw('white');
    // console.log(bmw);
    // console.log(bmw.wheels);
}


{
    const Test1 = class Test1 {
        wheel = 3;
    };

    const Test2 = class Test2 {
        constructor(num) {
            this.wheel = num;
        }

        static name = 'he';
    };

    const Test3 = function(num) {
        this.wheel = num;


    };


    const test1 = new Test1();
    const test2 = new Test2(3);
    const test3 = new Test3(3);
    const test4 = new Test2(4);
    // console.log(test1);
    console.log(test2);
    // console.log(test3);


    // console.log(Test1.prototype);
    console.log(Test2.prototype);
    // console.log(Test3.prototype);

    // console.log(test1.__proto__);
    console.log(test2.__proto__);
    // console.log(test3.__proto__);


    console.log(test2.name);
    console.log(test3.name);


}
