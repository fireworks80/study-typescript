{
    class Car {
        /*
        color: string; // ts에서 맴버 변수 미리 선언
        constructor(color: string) {
            // color 프로퍼티가 Car에 없다고 오류가 난다
            // ts에서 맴버변수는 미리 선언해 줘야 한다.
            this.color = color;
        }
        */
        // 맴버 변수를 미리 선언(X) 방식
        // 1. 접근 제한자
        /*
        constructor(public color: string) {
            this.color = color;
        }*/

        // 2. readonly
        constructor(readonly color: string) {
            this.color = color;
        }

        start() {
            console.log('start');
        }
    };

    const bmw = new Car('black');
}

{
    // 추상 클래스
    // abstract 키워드 사용

    abstract class Car {
        constructor(public color: string) {
            this.color = color;
        }
        start() {
            console.log('start');
        }

        abstract doSomething(): void;
    };

    // 추상 클래스는 new로 선언 할 수 없고 상속으로만 구현이 가능
    // const car = new Car('red');

    class Bmw extends Car {
        constructor(color: string) {
            super(color);
        }
        // 부모에서의 추상 메서드는 반드시 구현 해야 한다.
        doSomething(): void {
            console.log('do something');
        }
    };
    const car = new Bmw('gray');
}