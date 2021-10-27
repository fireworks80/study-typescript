// generic
// 클래스, 함수, 인터페이스를 다양한 타입으로 재 사용 할 수 있다.
// 선언 할때 type 파라미터만 적어주고 생성하는 시점에 타입을 결정



    function getSize(arr: number[]): number {
        return arr.length;
    }
    const arr1 = [1,2,3];
    getSize(arr1); // 3

    // 매개 변수 타입이 바뀌었지만 getSize() arr은 number[] 타입으로 선언해서 오류
    const arr2 = ['1','2','3'];
    // getSize(arr2); // 3
    //
    // 매개 변수의 타입은 바뀌었지만 동일한 함수를 재사용 하고 싶을때
    // function getSize(arr: number[] | string[])
    // 이렇게 해 줄 수 있지만 타입이 더 많아 질 수도 있음
    // 이럴때 제네릭을 사용
    // T는 type 파라미터라고 한다. (다른 이름으로 사용해도 된다)
    // T는 어떤 타입을 전달 받아서 매개변수에서 사용 할 수 있도록 한다.

    // <T>라는 타입을 받아서 (arr: T[])라는 타입으로 사용

    function getSize2<T>(arr: T[]): number {
        return arr.length;
    }
    // 사용하는 쪽에서 타입을 설정
    // <number> 나 <string>은 사용하지 않아도 arguments에 따라 타입이 설정 된다.
    let val1 = [1,2,3];
    getSize2<number>(val1);
    getSize2<string>(['1','2','3']);

    // 특정 타입으로 강제 할때
    getSize2<boolean | number>([true, false, false]);

{
    // case2
    /*
    interface Mobile {
        name: string;
        price: number;
        // 어떤 데이터가 올지 모름 string, boolean.......
        // 이럴 경우 제네릭을 사용 할 수 있음
        // option: any;
    }
    */


    interface Mobile<T> {
        name: string;
        option: T;
    }

    // Mobile<object> 또는 옵션이 정해져 있으면 <정해진 타입>
    const m1: Mobile<{ color: string, coupon: boolean }> = {
        name: 'iphone',
        option: {
            color: 'blue',
            coupon: false
        }
    };
    // option이 string이므로 <string>
    const m2: Mobile<string> = {
        name: 's21',
        option: 'good'
    };

}


    interface User {
        name: string;
        age: number;
    }

    interface Car {
        name: string;
        color: string;
    }

    interface Book {
        price: number;
    }

    const user: User = {name: 'kk', age: 20};
    const car: Car = {name: 'bmw', color: 'gray'};
    const book: Book = {price: 3000};

    // 현재 data는 any 타입이다.
    /*
        function showName(data): string {
            return data.name;
        }
      */

    // 타입 지정
    // 오류 발생 T에는 name이 없다
    // book은 name이 없으므로... 하지만 showName 함수에서 오류가 난다
    /*
        function showName<T>(data: T): string {
            return data.name;
        }
    */
    // T 타입을 받을때 그 타입은 {name: string} 타입을 확장해서 가지고 있어야 한다.
    // 이러면 호출 하는 쪽에서 error로 바뀌게 됨
    function showName<T extends { name: string }>(data: T): string {
        return data.name;
    }

    showName(user);
    showName(car);

    // {name: string } 이 없으니 오류 발생
    // showName(book);
