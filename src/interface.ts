// 프로퍼티를 정의해서 객체를 사용하고자 할때
// interface를 사용
{
    let user: object;

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
    interface User {
        name: string;
        age: number;
        gender?: string;
    }

    let user: User = {
        name: 'dd',
        age: 10;
    };

    user.gender = 'male';
}

// readonly
// 읽을 수만 있음

{
    interface User {
        name: string;
        age: number;
        gender?: string;
        readonly birthYear: number;
    }

    let user: User = {
        name: 'dd',
        age: 10,
        birthYear: 2000
    };

    // user.birthYear = 1999; birtyYear는 readonly 이므로 수정 불가
}