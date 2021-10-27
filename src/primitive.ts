let car: string = 'hello';
let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1,2,3];
let a2: Array<number> = a;

let week: string[] = ['mon', 'tue', 'wed'];
let week2: Array<string> = week;

// tuple
let b:[string, number];
b = ['z', 1];
// b = [1, 'b']; error

b[0].toLowerCase();
// b[1].toLowerCase(); error

// void, never

// void : 함수에서 리턴이 없을때
function sayHello(): void {
    console.log('hello');
}

// never
// error을 반환
function showError(): never {
    throw new Error();
}

// 영원히 끝나지 않는 함수? 의 타입
function infLoop(): never {
    while(true) {
        // do something...
    }
}

// enum
// 비슷한 값들 끼리 묶어줌
// enum에 값을 할당 하지 않으면 0 ~ +1 씩 값을 할당 한다.
// Window = 4를 넣으면 그 이후 부터는 5, 6으로 값이 변경관다.
enum Os {
    Window,
    Ios,
    Android
}

/*
    컴파일 된 값
    양방향 맵핑
* var Os;
(function (Os) {
    Os[Os["Window"] = 0] = "Window";
    Os[Os["Ios"] = 1] = "Ios";
    Os[Os["Android"] = 2] = "Android";
})(Os || (Os = {}));
* */

console.log(Os[1]); // 'Ios'
console.log(Os['Ios']); // 1

// enum에는 문자열도 넣을 수 있음
// 하지만 문자열은 단방향 맵핑만 된다.

enum Os2 {
    Window = 'win',
    Ios = 'ios',
    Android = 'android'
}

/*
* var Os2;
(function (Os2) {
    Os2["Window"] = "win";
    Os2["Ios"] = "ios";
    Os2["Android"] = "android";
})(Os2 || (Os2 = {}));
* */

// myOs에는 Window, Ios, Android 만 입력할 수 있게 된다.
// 특정값만 입력할 수 있게끔 강제하고, 그 값들이 공통점이 있을때.
let myOs: Os;
myOs = Os.Window;
console.log(myOs);

// undefined, null
let c: null = null;
let d: undefined = undefined;