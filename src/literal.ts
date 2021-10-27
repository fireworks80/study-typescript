// literal types
const name1 = 'bob'; // name: bob (값이 변할 수 없으므로) - 문자열 리터럴 타입
// let name2 = 'tom'; // name: string (값이 변할 수 있으므로)
// name2 = 3; // string 타입이므로 오류
// name2를 숫자도 들어가게 만들려면
let name2: number | string = 'top';
name2 = 3;

type Job = 'police' | 'dev' | 'teacher';

interface User {
    name: string;
    job: Job;
}

const user: User = {
    name: 'bob',
    // job는 type Job의 값 외에는 오류
    job: 'dev'
};

interface Student {
    name: string;
    // 유니온 타입이라고 함
    grade: 1 | 2 | 3
}

{
    interface Car {
        name: 'car';
        color: string;
        start(): void
    }

    interface Mobile {
        name: 'mobile';
        color: string;
        call(): void
    }

    const getGift = (gift: Car | Mobile): void => {
        console.log(gift.color);
        // gift에는 start() 가 없으므로 오류
        // gift.start();

        // 동일한 속성을 다르게 해서 구분 할 수 있는 것을 식별 가능한 유니온 타입
        gift.name === 'car' ? gift.start() : gift.call();
    };
}

{
    // 인터섹션 유니온 타입 (교차 타입)
    // 여러 타입을 합쳐서 사용 한다.
    // 유니온 (||), 교차타입 (&&)

    interface Car {
        name: string;
        start(): void;
    }

    interface Toy {
        name: string;
        color: string;
        price: number;
    }

    // 위의 두 타입을 다 넣어야 한다.
    const toyCar: Toy & Car = {
        name: 'toy car',
        color: 'blue',
        start() {},
        price: 3000
    };

    toyCar.name;
}