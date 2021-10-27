// utility
{
// keyof
    interface User {
        id: number;
        name: string;
        age: number;
        gender: 'm' | 'f'
    }

// type UserKey = 'id' | 'name' | 'age' | 'gender'; 와 같다
    type UserKey = keyof User;

// UserKey의 값이 없으므로 오류
// const uk: UserKey = 'fd'; // err
    const uk: UserKey = 'id'; // ok
}

{
    // partial<T>
    // 프로퍼티 값의 모두 옵션으로 바꿔준다.
    // 일부만 사용 가능하다.
    interface User {
        id: number;
        name: string;
        age: number;
        gender: 'm' | 'f'
    }

    /*
    Error: age, gender가 없음
    const admin: User = {
        id: 1,
        name: 'k'
    };
    */


    // 이 것은
    // interface User {
    //     id?: number;
    //     name?: string;
    //     age?: number;
    //     gender?: 'm' | 'f'
    // }
    // 이것과 같다.
    const admin: Partial<User> = {
        id: 1,
        name: 'k'
    };

}


{
    // required
    // 모든 프로퍼티를 필수로 바꿔준다
    interface User {
        id: number,
        name: string,
        age?: number
    }

    // Error: required가 option인 age를 필수로 바꿨기 때문에
    const admin: Required<User> = {
        id: 1,
        name: 'k',
        // Require 이므로 age추가
        age: 30
    };

}

{
    // Readonly<T>
    interface User {
        id: number,
        name: string,
        age?: number
    }

    // 할당만 가능
    const admin: Readonly<User> = {
        id: 1,
        name: 'k',
        age: 30
    };

    // 수정 불가
    // admin.age = 30;
}

{
    // Record<K, T>
    //K: key, T: type

    /*
    interface Score {
        '1': 'A' | 'B' | 'C' | 'D';
        '2': 'A' | 'B' | 'C' | 'D';
        '3': 'A' | 'B' | 'C' | 'D';
        '4': 'A' | 'B' | 'C' | 'D';
    }

    const score: Score = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D'
    };
    */
     // 레코드로 변경
    /*
    const score: Record<'1' | '2' | '3' | '4', 'A' | 'B' | 'C' | 'D'> = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D'
    };
    */

    type Grade = '1' | '2' | '3' | '4';
    type Score = 'A' | 'B' | 'C' | 'D';
    const score: Record<Grade, Score> = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D'
    };

}

{
    // record case2
    interface User {
        id: number;
        name: string;
        age: number;
    }

    const isValid = (user: User): Record<keyof User, boolean> => {
        return {
            id: user.id > 0,
            name: user.name !== '',
            age: user.age > 0
        }
    };

    // isValid({id: 1, name: 'k', age: 20});
}

{
    // Pick<T, K>
    // K 프로퍼티만 골라서 사용

    interface User {
        id: number;
        name: string;
        age: number;
        gender: 'm' | 'f'
    }

    // User 에서 id, name만 가져와서 사용 가능
    const admin: Pick<User, 'id' | 'name'> = {
        id: 1,
        name: 'k'
    };
}

{
    // Omit<T, K>
    // 특정프로퍼티를 생략하고 쓸 수 있다

    interface User {
        id: number;
        name: string;
        age: number;
        gender: 'm' | 'f'
    }

    // User 에서 age, gender 빼고 사용 할 수 있다
    const admin: Omit<User, 'age' | 'gender'> = {
        id: 1,
        name: 'k'
    };
}

{
    // Exclude<T1, T2>
    // T1에서 T2를 제거하고 사용
    // Omit과 다른점: Omit은 프로퍼티들을 제외, Exclude는 타입으로 제거
    // T1 타입들 중에서 T2 타입과 겹지는 것을 제거 시켜준다.

    type T1 = string | number;
    type T11 = string | number | boolean;
    type T2 = Exclude<T1, number> // string만 남음
    type T3 = Exclude<T11, string | number> // boolean만 남음

}

{
    // NonNullable<Type>
    // null, undefined를 제외시킴

    type T1 = string | null | undefined | void;
    type T2 = NonNullable<T1>; // string | void 만 남는다.
}