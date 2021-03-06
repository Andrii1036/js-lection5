// ---------------------------------------------------------------------------------------------------------------------
// Дано натуральное число n. Выведите все числа от 1 до n.
let allNumberWithLimit = n => {
    for (i = 1; i < n; i++) {
        console.log(i);
    };
    console.log('--------------------------------------')
};
allNumberWithLimit(10);
// ------------------------------------------------------------------------------------------------------------------

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, 
// в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let allNumberBetweenAandB = (a, b) => {
    if (a > b) {
        console.log('A>B тому виводимо значення в порядку спадання')
        for (i = a; i >= b; i--) {
            console.log(i);
        };
        console.log('--------------------------------------')
    } else if (a < b) {
        console.log('A<B тому виводимо значення в порядку зростання')
        for (i = a; i <= b; i++) {
            console.log(i)
        };
        console.log('--------------------------------------')
    } else {
        console.log('непродумана умова')
        console.log('--------------------------------------')
    }

};
allNumberBetweenAandB(10, 2);
allNumberBetweenAandB(10, 20);
allNumberBetweenAandB(10, 10);
// --------------------------------------------------------------------------------------------------------------------------------

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
];
console.log(`оригінальний масив ${arr}`)
let chahgeItemInArray = (array, i) => {
    let temporaryItem;
    temporaryItem = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temporaryItem;
    console.log(`змінений масив ${arr}`);
    console.log('--------------------------------------------------------------------');
};
chahgeItemInArray(arr, 1);
// -------------------------------------------------------------------------------------------------------

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let arr2 = [
    1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0
];
console.log('оригінальний масив : ' + arr2)
let replaceItemWithZeroValue = array => {
    let temporaryItem;
    for (key in array) {
        if (array[key] === 0) {
            temporaryItem = array.splice(key, 1);
            array.push(temporaryItem[0]);
        };
    };
};
replaceItemWithZeroValue(arr2);
console.log('змінений масив : ' + arr2)
console.log('------------------------------------------------------------------');
// ------------------------------------------------------------------------------------------------