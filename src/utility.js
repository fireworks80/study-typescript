// utility
{
    // UserKey의 값이 없으므로 오류
    // const uk: UserKey = 'fd'; // err
    var uk = 'id'; // ok
}
{
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
    var admin = {
        id: 1,
        name: 'k'
    };
}
{
    // Error: required가 option인 age를 필수로 바꿨기 때문에
    var admin = {
        id: 1,
        name: 'k',
        // Require 이므로 age추가
        age: 30
    };
}
{
    // 할당만 가능
    var admin = {
        id: 1,
        name: 'k',
        age: 30
    };
    // 수정 불가
    // admin.age = 30;
}
{
    var score = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D'
    };
}
{
    var isValid = function (user) {
        return {
            id: user.id > 0,
            name: user.name !== '',
            age: user.age > 0
        };
    };
    isValid({ id: 1, name: 'k', age: 20 });
}
