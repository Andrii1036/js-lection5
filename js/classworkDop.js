// створити функцію яка приймає години, хвилини, секунди. Виводить всі години, хвилини, секунди і зупиняється на вказаному часі
let hour = +prompt('Enter Hour');
let minute = +prompt('Enter Minute');
let second = +prompt('Enter second');

let alarmClock = (hour, minute, second) => {
    for (h = 0; h < 24; h++) {
        if (h < hour) {
            for (m = 0; m < 60; m++) {
                for (s = 0; s < 60; s++) {
                    console.log(`Hour:${h} minute:${m} second:${s}`);
                };
            };
        } else if (h === hour) {
            for (m = 0; m <= minute; m++) {
                if (m < minute) {
                    for (s = 0; s < 60; s++) {
                        console.log(`Hour:${h} minute:${m} second:${s}`);
                    };
                } else if (m = minute) {
                    for (s = 0; s <= second; s++) {
                        console.log(`Hour:${h} minute:${m} second:${s}`);
                    };
                };
            };
        };
    };
};

alarmClock(hour, minute, second);

// ------------------------------------------------------------------------------------------------------------------------------------
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100 і не використовувати методи масиву
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let arr = [
    0, 0, 1, 2, 3, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0
];

let zeroToEnd = array => {
    let arrWithZero = [];
    let arrWithZeroInEnd = []
    for (value of arr) {
        if (value === 0) {
            arrWithZero[arrWithZero.length] = value;
        } else {
            arrWithZeroInEnd[arrWithZeroInEnd.length] = value
        }
    }
    for (item of arrWithZero) {
        let a = 0;
        arrWithZeroInEnd[arrWithZeroInEnd.length + a] = item;
        a++
    }
    console.log(arrWithZeroInEnd)
    return arrWithZeroInEnd;
}
zeroToEnd(arr);