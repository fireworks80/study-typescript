// 함수
// return 이 없으면 void
var add = function (num1, num2) { return num1 + num2; };
// 매개변수 옵셔녈
var hello = function (name) { return "Hello " + (name || 'world'); };
// 또는
var hello2 = function (name) {
    if (name === void 0) { name = 'world'; }
    return "Hello " + name;
};
// 선택정 매개 변수가 필수 매개 변수 앞에 올 수 없다.
/*
const hello3 = (age?: number, name: string) => {
    // ...
};
 */
// or
var hello3 = function (age, name) {
    return age ? name + ". age: " + age : "" + name;
};
// 나머지 매개변수
// const add2 = (...args) => args.reduce((acc, num) => acc + num, 0);
var add2 = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, num) { return acc + num; }, 0);
};
var Sam = { name: 'Sam' };
// const sayName = function() { return this.name; }; // this 타입이 없어서 오류
var sayName = function () {
    return this.name;
};
// 매개변수가 있을 경우
var sayName2 = function (age, gender) {
    return this.name + ", age: " + age + ", gender: " + gender;
};
// const a = sayName.bind(Sam);
// console.log(a()); // Sam
var a = sayName2.bind(Sam);
console.log(a(20, 'm'));
